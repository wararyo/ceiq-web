<template>
    <section class="lecturers" :style="style" id="lecturers">
        <section-header title="Lecturers" subtitle="講師陣" />
        <ul>
            <li class="lecturer">
                <img src="@/assets/kooki-shirakawa.jpg" class="lecturer-image"/>
                <div class="lecturer-inner">
                    <h3 class="lecturer-name">白川 東一</h3>
                    <div class="lecturer-degree">空気株式会社 ディレクター</div>
                    <div class="lecturer-description">
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
            <li class="lecturer">
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
            <li class="lecturer">
                <img src="@/assets/cc2-takeshita.jpg" class="lecturer-image"/>
                <div class="lecturer-inner">
                    <h3 class="lecturer-name">竹下 勲</h3>
                    <div class="lecturer-degree">株式会社サイバーコネクトツー 開発部 アートマネージャー</div>
                    <div class="lecturer-description">
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
            <li class="lecturer">
                <img src="@/assets/gangle-shingo.jpg" class="lecturer-image"/>
                <div class="lecturer-inner">
                    <h3 class="lecturer-name">新郷 佑太</h3>
                    <div class="lecturer-degree">株式会社ジーアングル チーフエキスパート・ディレクター</div>
                    <div class="lecturer-description">
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
    margin: 24px auto;
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
    }
    .lecturer-name {
        margin-top: 13px;
        font-size: 2rem;
        line-height: 1.5em;
        font-weight: bold;
    }
    .lecturer-degree {
        margin-bottom: 16px;
        color: rgba(#000, .5);
    }
    .lecturer-organization {
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
</style>

