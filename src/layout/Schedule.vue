<template>
    <section class="schedule" :style="style" id="schedule">
        <section-header title="Schedule" subtitle="イベントの日程" />
        <ul class="events">
            <li class="is-whole is-line">
                <time>13:00</time>
                <h3>オリエンテーション</h3>
            </li>
            <li id="lecture-musicvideo" class="is-lecture is-line">
                <time>13:30</time>
                <div>
                    <h3>ミュージックビデオの作られ方<br>
                    <span class="small">〜Suchmosの対照的な楽曲を通して紐解く最適解〜</span></h3>
                    <a href="#lecturer-shimura" class="event-lecturer"><span class="event-lecturer-heading">講師</span>志村 龍之介, 八木 光平</a>
                    <p>ロックバンドSuchmosのとある2つの楽曲にてミュージックビデオの制作を行なったHelixes。<br>
                    2つはそれぞれテイストが異なり、ミュージックビデオにもその特徴が表れています。</p>
                    <p>それらを比較する中で、プロダクションの設計に必要な考え方や、実際に働く上での重要なマインドを解説します。</p>
                </div>
            </li>
            <li id="lecture-gangle" class="is-break is-line">
                <span>休憩 10分</span>
            </li>
            <li class="is-lecture is-line">
                <time>14:10</time>
                <div>
                    <h3>
                        ～fortis fortuna adiuvat 運命は勇者に味方する～<br>
                        <span class="small">一歩踏み出す勇気が会社を成長させた総合デジタルコンテンツの制作会社・株式会社ジーアングル。</span>
                    </h3>
                    <a href="#lecturer-shingo" class="event-lecturer"><span class="event-lecturer-heading">講師</span>新郷 佑太</a>
                    <p>かつては音楽の製作会社だった株式会社ジー・アングル。しかし今では映像や3DCGなども手がける総合制作会社となっています。</p>
                    <p>なぜこのような進化を遂げることができたのか、その経緯とともにジー・アングルの持つ考え、そしてこれからの展望に触れていきます。</p>
                </div>
            </li>
            <li class="is-break is-line">
                <span>休憩 10分</span>
            </li>
            <li id="lecture-cinematics" class="is-lecture is-line">
                <time>14:50</time>
                <div>
                    <h3>ゲームシネマティクス(リアルタイムデモ) 制作事例</h3>
                    <a href="#lecturer-takeshita" class="event-lecturer"><span class="event-lecturer-heading">講師</span>竹下 勲</a>
                    <p>映像が流れるその場で描画処理が行われるゲームシネマティクスには、通常のCGムービーには見られない魅力が存在します。</p>
                    <p>これまで数多くのゲームシネマティクス制作を手がけてきたCC2。<br>
                    その実際の事例やワークフローを紹介しながら、リアルタイム映像の価値に触れていきます。</p>
                </div>
            </li>
            <li class="is-break">
                <span>休憩 30分</span>
            </li>
            <li class="is-lecture is-line">
                <time>15:50</time>
                <div>
                    <h3>LT会</h3>
                    <p>今の思いを語りたい若者たち3人が、10分間のライトニングトークを行います。</p>
                </div>
            </li>
            <li class="is-break is-line">
                <span>休憩 10分</span>
            </li>
            <li id="lecture-promotionmovie" class="is-lecture is-line">
                <time>16:30</time>
                <div>
                    <h3>プロモーション映像の制作現場</h3>
                    <a href="#lecturer-shirakawa" class="event-lecturer"><span class="event-lecturer-heading">講師</span>白川 東一</a>
                    <p>空気株式会社では日々数多くの企画/演出を行なっています。<br>
                        これまでに受注した仕事をどのように世に送り出したか、クライアントとの交渉などリアルな体験を基にユニークな映像形式で紹介します。
                    <p>これから映像業界を目指す学生のみなさん、必見です。</p>
                </div>
            </li>
            <li class="is-whole">
                <time>17:00</time>
                <h3>閉会式</h3>
            </li>
            <li class="is-special">
                <time>18:30</time>
                <h3>立食交流会</h3>
            </li>
        </ul>
        <div class="supplement">途中参加・退出OK</div>
        <div class="supplement">スケジュールは変更される可能性があります。その際はTwitterやFacebookでお知らせします。</div>
    </section>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";
export default {
    components: {
        SectionHeader
    },
    data: function() {
        return {
            style: {}
        }
    },
    methods: {
        onScroll: function() {
            let y = this.$el.getBoundingClientRect().top;
            this.$set(this.style,'background-position-y',y * 1 / 3 - 200 + "px, 0");
        }
    },
    mounted() {
        if(!this.isMobile()) window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        if(!this.isMobile()) window.removeEventListener('scroll', this.onScroll);
    }
}
</script>


<style lang="scss" scoped>
.schedule {
    margin: 24px auto;
    min-height: 560px;
    padding-bottom: 80px;
    text-align: center;
    background: url("~@/assets/illust-gray.png"), linear-gradient(135deg, #f5eff3 0%, #ecdcea 100%);
    background-size: 150%, 100%;
    background-position: center 80%, 0 0;
    background-repeat: no-repeat;
    background-attachment: fixed, scroll;
    background-blend-mode: overlay;
    color: #333;
    box-shadow: 0 3px 6px rgba(black,.2);

    p {
        color: #454545;
        text-align: left;
        margin: 0.5em 0;
    }
    .supplement {
        color: rgba(black, .4);
        font-size: 0.8rem;
    }
}

.events {
    list-style-type: none;
    text-align: left;
    max-width: 996px;
    width: calc(100% - 32px);
    margin: 24px auto;
    li {
        display: flex;
        justify-content: flex-end;
        padding-bottom: 24px;
        position: relative;

        > * {
            width: calc(100% - 156px - 72px);
        }
        &:before { //点
            content: "";
            display: block;
            position: absolute;
            z-index: 2;
            font-size: 1.25rem;//topをemで指定するために使用
            top: 0.75em;
            left: 156px+36px;
            height: 24px;
            width: 24px;
            transform: translate(-50%,-50%);
            background-color: #FFF;
            border-radius: 50%;
            border: 5px solid #444;
        }
        &.is-line:after { //線
            content: "";
            display: block;
            position: absolute;
            z-index: 1;
            font-size: 1.25rem;//topをemで指定するために使用
            top: 0.75em;
            left: 156px+36px;
            width: 0px;
            bottom: -24px;
            transform: translateX(-2.5px);
            border-left: 5px dotted #444;

        }
        &.is-lecture:before {
            background-color: #5EC8FF;
        }
        &.is-special:before {
            background-color: #F34F11;
        }
        &.is-break {
            span {
                margin: 0;
                padding: 0;
                color: rgba(#000,.5);
            }
            &:before {
                width: 16px;
                height: 16px;
                background-color: #444;
            }
        }
    }
    time {
        width: 156px;
        margin-right: 72px;
        line-height: 1.5em;
        text-align: right;
        font-size: 1.25rem;
        font-weight: bold;
        transform: translateY(1px);
    }
    h3 {
        line-height: 1.5em;
        font-size: 1.25rem;
        > .small {
            display: inline-block;
            margin-top: 0.5em;
            font-size: 1rem;
            line-height: 1.25em;
        }
    }
    .event-lecturer {
        font-size: 0.8rem;
        text-decoration: none;
        color: #333;

        &:hover .event-lecturer-heading {
            background-color: #666;
        }
        .event-lecturer-heading {
            display: inline-block;
            margin: 12px 0.75em 8px -0.5em;
            padding: 0 0.8em;
            line-height: 24px;
            border-radius: 12px;
            color: #EEE;
            background-color: #454545;
        }
    }
}

@media screen and (max-width: 599px) {
    .events {
        li {
            > * {
                width: calc(100% - 72px - 72px);
            }
            &.is-line:after, &:before { //線
                left: 72px+36px;
            }
            &.is-lecture {
                flex-wrap: wrap;
                justify-content: flex-start;
                > div:last-child {
                    position: relative;
                    z-index: 10;
                    width: 100%;
                    margin: 8px 0;
                    padding: 16px 24px;
                    background-color: rgba(white,.5);
                    border-radius: 16px;
                    backdrop-filter: blur(8px);
                }
            }
        }
        time {
            width: 72px;
        }
    }
}
</style>

