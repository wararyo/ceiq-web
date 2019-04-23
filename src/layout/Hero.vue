<template>
    <header>
        <div class="hero-background">
            <canvas id="hero-metaball" :width="window.width" :height="window.height" />
        </div>
        <div class="hero-heading">
            <navigation />
            <share />
        </div>
        <h1 id="hero-svg-logo">
            
        </h1>
        <div class="hero-description">
            <p><span class="is-big">2019</span>年 <span class="is-big">9/22</span>(日) 13:00 -</p>
            <p><span class="is-big">九州大学 大橋キャンパス</span>にて開催</p>
            <p>無料 (事前の予約が必要)</p>
        </div>
        <div class="arrow-down">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 56 56"><title>arrow-down</title><path d="M28,39a2.988,2.988,0,0,1-2.121-.879l-16-16a3,3,0,0,1,4.242-4.242L28,31.758,41.879,17.879a3,3,0,0,1,4.242,4.242l-16,16A2.989,2.989,0,0,1,28,39Z"/></svg>
        </div>
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
            window: {width:window.innerWidth, height:window.innerHeight}
        }
    },
    methods: {
        handleResize: function() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
    },
    mounted() {
        window.addEventListener('resize',this.handleResize);
        Metaball.init();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    }
}

//ロゴのSVGアニメーション
var jsonfile = "SnapSVGAnimator/logo.json",
    fps = 60,
    width = 480,
    height = 640,
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
    min-height: calc(100vh - 24px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    box-shadow: 0px 3px 6px rgba(112, 40, 52, 0.2);
    .hero-background {
        z-index: -1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(122deg,#f5f0b1 0%, #f5bfc6 50%, #c5eeef 100%);
        background-attachment: fixed;
        animation: fade-in 1s ease 2s 1 normal both running;
        overflow: hidden;
        canvas {
            position:absolute;
            opacity: 0.1;
        }
    }
    .hero-heading {
        align-self: stretch;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 36px;
        animation: fade-in 1s ease 1.8s 1 normal both running;
    }
    h1 {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .hero-description {
        margin-bottom: 5vh;
        text-align: center;
        font-weight: bold;
        color: rgba(#000,.75);
        animation: fade-in 1s ease 2.2s 1 normal both running;
        .is-big {
            font-size: 1.5em;
        }
    }
    .arrow-down {
        color: rgba(#000, .3);
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
</style>

<style lang="scss">
header h1 svg {
    animation: logo-pop 0.5s ease;
}
@keyframes logo-pop {
    0% {
        transform: scale(2);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>
