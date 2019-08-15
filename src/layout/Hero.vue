<template>
    <header @mousemove="onMousemove($event)">
        <div class="hero-background">
            <div class="hero-grid" :style="gridStyle"></div>
            <canvas id="hero-metaball" :width="window.width" :height="window.height" :style="canvasStyle" />
        </div>
        <div class="hero-heading" :style="headingStyle">
            <navigation />
            <a href="#" class="hero-reserve">予約する</a>
            <share />
        </div>
        <h1 id="hero-svg-logo" :style="iconStyle" >
            
        </h1>
        <div class="hero-description" :style="descriptionStyle">
            <p><span class="is-big">2019</span>年 <span class="is-big">9/15</span>(日) 13:00 -</p>
            <p><span class="is-big">九州大学 大橋キャンパス</span>にて開催</p>
            <p>500円 (事前の予約が必要)</p>
        </div>
        <a href="#about" class="arrow-down">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 56 56"><title>arrow-down</title><path d="M28,39a2.988,2.988,0,0,1-2.121-.879l-16-16a3,3,0,0,1,4.242-4.242L28,31.758,41.879,17.879a3,3,0,0,1,4.242,4.242l-16,16A2.989,2.989,0,0,1,28,39Z"/></svg>
        </a>
    </header>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Share from '@/components/Share.vue';
import Metaball from '../hero-metaball.js';

export default {
    components: {
        Navigation,
        Share
    },
    data: function() {
        return {
            window: {width:window.innerWidth, height:window.innerHeight},
            iconStyle: {'transform':''},
            descriptionStyle: {'transform':''},
            headingStyle: {'transform':''},
            canvasStyle: {'transform':''},
            gridStyle: {'transform':''},
            relativeMousePos: [0,0],
            smoothRelativeMousePos: [0,0],
            time: 0,//fps測定に使用
            latestDeltaTime: 0,
            isPerformanceMode: true,//trueで非力なPC用のモード
        }
    },
    methods: {
        onResize: function() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        onScroll: function() {
            let y = window.pageYOffset;
            if(this.isPerformanceMode) this.$set(this.gridStyle,'background-position-y',-(this.window.height*0.15) - y * 2 / 3 + "px");
            this.canvasStyle.visibility = (y >= this.window.height - 24) ? "hidden" : "visible";
        },
        onMousemove: function(e) {
            this.relativeMousePos = [e.x - (this.window.width / 2),e.y - (this.window.height / 2)];
        },
        //視差効果
        update: function () {
            let newestTime = new Date().getTime();
            if(500 > newestTime - this.time && newestTime - this.time > 100 && this.latestDeltaTime > 80) this.isPerformanceMode = true;
            this.latestDeltaTime = newestTime - this.time;
            this.time = newestTime;
            //カクツキが起きたらFPSを下げる
            if(this.isPerformanceMode) {
                this.iconStyle.transform = '';
                this.descriptionStyle.transform = '';
                this.headingStyle.transform = '';
                this.canvasStyle.transform = '';
                this.gridStyle.transform = '';
                return;
            }

            this.smoothRelativeMousePos[0] = this.relativeMousePos[0] * 0.1 + this.smoothRelativeMousePos[0] * 0.9;
            this.smoothRelativeMousePos[1] = this.relativeMousePos[1] * 0.1 + this.smoothRelativeMousePos[1] * 0.9;
            let x = this.smoothRelativeMousePos[0];
            let y = this.smoothRelativeMousePos[1];
            let rotation = [-y,x,0,Math.hypot(x,y) * 0.1];
            let translate = [x,y];

            this.iconStyle.transform = toTransformString(rotation,translate,0.02,0.04);
            let t1 = toTransformString(rotation,translate,0.02,0.02)
            this.descriptionStyle.transform = t1;
            this.headingStyle.transform = t1;
            this.canvasStyle.transform = t1;
            this.gridStyle.transform = toTransformString(rotation,translate,0.02,0);

            requestAnimationFrame(this.update);

            function toTransformString(rotation, translate, rotationMultiplier, transformMultiplier) {
                rotation = [rotation[0],rotation[1],rotation[2],rotation[3]*rotationMultiplier+'deg'];
                translate = [translate[0]*transformMultiplier+'px',translate[1]*transformMultiplier+'px'];

                return 'rotate3d('+rotation.join()+') translate('+translate.join()+')';
            }
        }
    },
    watch: {
        isPerformanceMode: function() {
            Metaball.isPerformanceMode = true;
        }
    },
    mounted() {
        window.addEventListener('resize', this.onResize);
        if(!this.isMobile()) window.addEventListener('scroll', this.onScroll);
        Metaball.init();
        this.time = new Date().getTime();
        this.update();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
        if(!this.isMobile()) window.removeEventListener('scroll', this.onScroll);
    }
}

//ロゴのSVGアニメーション
var jsonfile = "SnapSVGAnimator/logo.json",
    fps = 60,
    width = 480,
    height = 480,
    AJAX_req;

AJAX_JSON_Req(jsonfile);

function handle_AJAX_Complete() {
    if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
    {
        let json = JSON.parse(AJAX_req.responseText);
        let comp = new SVGAnim(
                        json,
                        width,
                        height,
                        fps
                        );
        // SVG 要素を所定の位置に移動させる
        var el = document.querySelector("svg[id^=svg]");
        var container = document.querySelector("#hero-svg-logo");
        container.appendChild(el);
    }
}

function AJAX_JSON_Req( url )
{
    AJAX_req = new XMLHttpRequest();
    AJAX_req.open("GET", url, true);
    AJAX_req.setRequestHeader("Content-type", "application/json");
    
    AJAX_req.onreadystatechange = handle_AJAX_Complete;
    AJAX_req.send();
}

</script>

<style lang="scss" scoped>
header {
    min-height: calc(100vh - 8px);
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background-color: white;
    box-shadow: 0px 3px 6px rgba(112, 40, 52, 0.2);
    perspective: 500px;
    perspective-origin: 50vw 50vh;
    .hero-background {
        z-index: -1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #6AD1D4;
        //background-attachment: fixed;
        animation: fade-in 1s ease 2.2s 1 normal both running;
        overflow: hidden;
        perspective: 500px;
        canvas {
            position:absolute;
            transform: translateX(-20vw);
        }
        .hero-grid {
            position: absolute;
            z-index: 1;
            left: 10%;
            right: -20%;
            top: -16%;
            bottom: -16%;
            background: url("~@/assets/illust-blue.png");
            mix-blend-mode: normal;
            //background: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2256%22%20height%3D%2256%22%20viewBox%3D%220%200%2056%2056%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3Argba(0%2C0%2C0%2C.03)%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3Egrid%3C%2Ftitle%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M55%2C1V1m1-1H54V54H0v2H56V0Z%22%2F%3E%3C%2Fsvg%3E");
            background-size: 120vh;
            background-position: 110% -15vh;
            background-attachment: fixed;
            background-repeat: no-repeat;
        }
    }
    .hero-heading {
        align-self: stretch;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        margin: 24px 48px 2vh;
        animation: fade-in 1s ease 1.8s 1 normal both running;

        .navigation {
            flex: 1;
        }
    }
    .hero-reserve {
        padding: 0 1em;
        margin: auto 16px;
        color: white;
        background: linear-gradient(90deg, #f1e55b 0%,#e95d6f 50%,#6bc5c9 100%);
        background-size: 200%;
        background-position: 100%;
        border-radius: 24px;
        height: 48px;
        line-height: 48px;
        text-decoration: none;
        font-weight: bold;
        box-shadow: 0 2px 4px rgba(black,.2);
        animation: reserve-background 10s ease alternate infinite running;
        transition: .1s;
        &:hover {
            transform: translateY(-1px);
            box-shadow: 0 3px 6px rgba(black,.2);
        }
    }
    h1 {
        position: relative;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: logo-move 1s ease 1.6s 1 normal both running;
    }
    .hero-description {
        margin-bottom: 5vh;
        text-align: center;
        font-weight: bold;
        color: rgba(#000,.75);
        background-color: #D9F3F4;
        border-radius: 80px;
        padding: 10px 64px;
        animation: fade-in 1s ease 2.0s 1 normal both running;
        .is-big {
            font-size: 1.5em;
        }
    }
    .arrow-down {
        color: rgba(#FFF, 1);
        margin: 16px;
        animation: arrow-down 1.2s cubic-bezier(0.07,0.76,0.54,0.96) infinite;
    }
}

@keyframes arrow-down {
    0% {
        transform: translateY(-40%);
        opacity: 0;
    }
    25% {
        opacity: 1;
    }
    75% {
        opacity: 1;
    }
    100% {
        transform: translateY(0%);
        opacity: 0;
    }
}
@keyframes logo-move {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-20vw);
    }
}
@keyframes reserve-background {
    0% {
        background-position-x: 0;
    }
    100% {
        background-position-y: 100%;
    }
}

@media screen and (max-width: 959px) {
   header {
       .hero-background {
           canvas {
            transform: none;
           }
           .hero-grid {
               left: 0;
           }
       }
        h1 {
            animation: none;
            transform: none;
        }
        .hero-heading {
            flex-wrap: wrap;
            justify-content: flex-end;
        }
        .hero-reserve {
            margin: auto;
        }
   }
}
@media screen and (max-width: 599px) {
    header {
        h1 {
            transform: scale(0.75);
        }
        .hero-description {
            font-size: 0.8rem;
        }
        .hero-heading {
            margin: 16px 24px 2vh;
        }
    }
}

</style>

<style lang="scss">
header h1 svg {
    animation: fade-in 0.1s ease;
}
</style>
