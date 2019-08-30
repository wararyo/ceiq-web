<template>
    <section class="lecturers" :style="style" id="lecturers">
        <section-header title="Lecturers" subtitle="講師陣" />
        <ul>
            <li class="lecturer" id="lecturer-shimura">
                <div class="lecturer-images">
                    <img src="@/assets/helixes-shimura.jpg"/>
                    <img src="@/assets/helixes-yagi.jpg"/>
                </div>
                <div class="lecturer-inner">
                    <h3 class="lecturer-name">志村 龍之介</h3>
                    <div class="lecturer-degree">株式会社Helixes CEO</div>
                    <h3 class="lecturer-name">八木 光平</h3>
                    <div class="lecturer-degree">株式会社Helixes COO</div>
                    <div class="lecturer-description">
                        <p>
                            <span>人気アーティストのMV制作から</span><span>舞台演出まで行うHelixesを</span>
                            <span>創業当時から</span><span>盛り上げてきたお二人です。</span>
                        </p>
                        <a href="#lecture-musicvideo" class="lecturer-lecture"><span class="lecturer-lecture-content">ミュージックビデオの作られ方 〜Suchmosの対照的な楽曲を通して紐解く最適解〜</span></a>
                        <div class="lecturer-organization">
                            <img src="@/assets/helixes.svg" style="transform:translateX(-5%);" width="120" alt="">
                            <div>
                                <p>クリエイティブを用いて課題を解決する、トータルプランニングカンパニーです。</p>
                                <p>広告製作を始め、ブランドやデジタルプロダクトの開発、アーティストのマネジメントなど、クリエイティブを土台とした様々な事業を、総合的に企画・制作しています。</p>
                                <p>螺旋(Helix)のような常に上昇し続ける向上心を持ちながら、クライアントや世の中をもっと先へ進めることのできる事業を創出していくことを理念としています。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="lecturer" id="lecturer-shingo">
                <img src="@/assets/gangle-shingo.jpg" class="lecturer-image"/>
                <div class="lecturer-inner">
                    <h3 class="lecturer-name">新郷 佑太</h3>
                    <div class="lecturer-degree">株式会社ジーアングル チーフエキスパート・ディレクター</div>
                    <div class="lecturer-description">
                        <p><span>デジタルコンテンツを</span><span>オールジャンルで手がける</span><span>G-angleにて</span>
                        <span>映像のディレクションを</span><span>数多く手がけています。</span></p>
                        <a href="#lecture-gangle" class="lecturer-lecture"><span class="lecturer-lecture-content">～fortis fortuna adiuvat 運命は勇者に味方する～ 一歩踏み出す勇気が会社を成長させた総合デジタルコンテンツの制作会社・株式会社ジーアングル。</span></a>
                        <div class="lecturer-organization">
                            <img src="@/assets/gangle.svg" style="transform:translateX(-5%);" width="120" alt="">
                            <div>
                                <p>映像・動画/3DCG・イラスト/音楽/ナレーション、様々なプロフェッショナルが集い、デジタルコンテンツをオールジャンルで手がける総合制作会社です。</p>
                                <p>的確に消費者ニーズを捉え、インターネットとリアルの両側から、質の高いサービスを提供することに力を注いでおり、品質・価格・迅速な対応等、全てのサービスにクオリティーを追求していく「姿勢」を大事にしています。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="lecturer" id="lecturer-takeshita">
                <img src="@/assets/cc2-takeshita.jpg" class="lecturer-image"/>
                <div class="lecturer-inner">
                    <h3 class="lecturer-name">竹下 勲</h3>
                    <div class="lecturer-degree">株式会社サイバーコネクトツー 開発部 アートマネージャー</div>
                    <div class="lecturer-description">
                        <p><span>福岡のゲーム制作会社CC2で</span><span>リードアーティストを務め、</span>
                        <span>ゲーム制作にて</span><span>映像演出チームをまとめた</span><span>経験の持ち主です。</span></p>
                        <a href="#lecture-cinematics" class="lecturer-lecture"><span class="lecturer-lecture-content">ゲームシネマティクス(リアルタイムデモ) 制作事例</span></a>
                        <div class="lecturer-organization">
                            <img src="@/assets/cc2.jpg" width="120" alt="">
                            <div>
                                <p>
                                    サイバーコネクトツーの目的は、<br>
                                    "面白いゲームソフトを作ること"。
                                </p>
                                <p>
                                    そのことだけを考えて、そのために最大限の努力をして最大限の力を発揮する。<br>
                                    そのシンプルな"答え"に本気で立ち向かっています。<br>
                                    たくさんの"面白い"をエンターテインメントとして"世界"へ向けて発信していきます。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="lecturer" id="lecturer-shirakawa">
                <img src="@/assets/kooki-shirakawa.jpg" class="lecturer-image"/>
                <div class="lecturer-inner">
                    <h3 class="lecturer-name">白川 東一</h3>
                    <div class="lecturer-degree">空気株式会社 ディレクター</div>
                    <div class="lecturer-description">
                        <p><span>有名テレビCMなどの</span><span>ディレクションを手がけている他、</span>
                        <span>自身で特別展を企画するなど</span><span>多岐にわたる</span><span>活動を行っています。</span></p>
                        <a href="#lecture-promotionmovie" class="lecturer-lecture"><span class="lecturer-lecture-content">プロモーション映像の制作現場</span></a>
                        <div class="lecturer-organization">
                            <img src="@/assets/kooki.svg" style="transform:translateX(-5%);" width="120" alt="">
                            <div>
                                <p>
                                    ディレクター、アニメーター、モーショングラフィックスデザイナー、CGクリエイター、テクニカルディレクターなど、映像クリエイターが集うクリエイティブ・スタジオです。
                                </p>
                                <p>
                                    CM、ゲームオープニング、Music Videoなど様々なジャンルの映像製作を手がけています。
                                </p>
                                <p>
                                    「絶対にオモシロイモノしか作らない」をモットーに、映像を見る方々の心が動く物作りのために、製作からでなく企画の段階から参加するなどの取り組みも行なっています。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <!-- <div class="comingsoon">And so on...</div> -->
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
            this.$set(this.style,'background-position-y',y * 1 / 3 - 400 + "px, 0");
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
.lecturers {
    margin-top: 24px;
    padding-bottom: 80px;
    text-align: center;
    background: url("~@/assets/illust-gray.png"), linear-gradient(60deg,#fdfdf9 0%, #e9e6da 100%);
    background-size: 150%, 100%;
    background-position: calc(-100% + 5vw) 80%, 0 0;
    background-repeat: no-repeat;
    background-attachment: fixed, scroll;
    box-shadow: 0 3px 6px rgba(black,.2);
    background-blend-mode: hard-light, normal;
    p {
        text-align: left;
        margin: 0.5em 0;
    }
    ul {
        list-style-type: none;
    }
    .comingsoon {
        margin: 48px;
        color: rgba(black,.2);
        font-size: 3rem;
        font-family: menco, sens-serif;
        font-style: italic;
        font-weight: 700;
    }
}

.lecturer {
    max-width: 996px;
    width: calc(100% - 48px);
    margin: 48px auto;
    display: flex;
    align-items: flex-start;
    text-align: left;
    .lecturer-image {
        width: 180px;
        background-color: #EEE;
        border-radius: 24px;
        box-shadow: 0 3px 6px rgba(0,0,0,.1);
    }
    .lecturer-images {
        width: 180px;
        > img {
            width: 100%;
            border-radius: 24px;
            box-shadow: 0 3px 6px rgba(0,0,0,.1);
        }
    }
    .lecturer-inner {
        margin-left: 36px;
        flex: 1;
        overflow: hidden;
        width: 100%;
    }
    .lecturer-name {
        margin-top: 4px;
        font-size: 2rem;
        line-height: 1.5em;
        font-weight: bold;
    }
    .lecturer-degree {
        margin-bottom: 16px;
        color: rgba(#000, .5);
    }
    .lecturer-description {
        color: #333;
        > p > span {
            display: inline-block;
        }
    }
    .lecturer-lecture {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 1em 0;
        padding-right: 1em;
        height: 32px;
        font-size: 0.9rem;
        text-decoration: none;
        color: #333;
        background-color: white;
        border-radius: 16px;
        overflow: hidden;

        &:hover .lecturer-lecture-heading {
            background-color: #666;
        }
        &:after {
            content: "";
            display: inline-block;
            width: 1em;
            height: 1em;
            background: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2256%22%20height%3D%2256%22%20viewBox%3D%220%200%2056%2056%22%3E%3Ctitle%3Earrow-down%3C%2Ftitle%3E%3Cpath%20d%3D%22M39%2C28a2.988%2C2.988%2C0%2C0%2C1-.879%2C2.121l-16%2C16a3%2C3%2C0%2C0%2C1-4.242-4.242L31.758%2C28%2C17.879%2C14.121a3%2C3%2C0%2C1%2C1%2C4.242-4.242l16%2C16A2.989%2C2.989%2C0%2C0%2C1%2C39%2C28Z%22%2F%3E%3C%2Fsvg%3E");
            background-size: contain;
            background-position: center;
            opacity: 0.3;
            animation: arrow-right 3s infinite;
        }
        &:before {
            content: "講演";
            display: inline-block;
            margin: 0 0.75em 0 0;
            padding: 0 1em 0 1.2em;
            line-height: 32px;
            //border-radius: 16px;
            color: #EEE;
            background-color: #454545;
        }
        .lecturer-lecture-content {
            flex: 1;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
    .lecturer-organization {
        margin-top: 1em;
        padding: 16px 24px;
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        background-color: white;
        border-radius: 8px;
        > div {
            flex: 1;
            margin-left: 8px;
            padding-left: 16px;
            border-left: 1px solid rgba(black,.1);
        }
    }

    &.disabled {
        .lecturer-image {
            background-color: #555;
            padding: 48px;
            opacity: .2;
            box-shadow: none;
        }
        .lecturer-name {
            display: inline-block;
            margin-bottom: .2em;
            min-width: 30%;
            background-color: rgba(#555,.2);
            border-radius: 1em;
        }
        .lecturer-degree {
            display: block;
            width: 50%;
            background-color: rgba(#555,.1);
            border-radius: 8px;
        }
        .lecturer-description p {
            display: block;
            width: 100%;
            background-color: rgba(#555,.05);
            border-radius: 8px;
        }
    }
}

@media screen and (max-width: 599px) {
    .lecturer {
        flex-direction: column;
        align-items: center;
        margin-bottom: 48px;
        .lecturer-inner {
            margin-left: 0;
        }
        .lecturer-organization {
            display: block;
            > div {
                margin: 8px;
                padding: 0;
                border: none;
            }
        }
    }
}

@keyframes arrow-right {
    0% {
        opacity: 0;
        transform: translateX(-2px);
    }
    10% {
        opacity: 0.3;
        transform: translateX(0);
    }
    90% {
        opacity: 0.3;
        transform: translateX(0);
    }
    100% {
        opacity: 0;
        transform: translateX(2px);
    }
}
</style>

