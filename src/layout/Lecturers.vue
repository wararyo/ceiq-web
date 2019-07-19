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
                        <p>ゲームOPやTV-CM、番組パッケージなどのディレクションを手がけ、キャラクターを使用した映像表現を得意とする。</p>
                        <p>オリジナルアニメーション「ミスターシェイプ」は世界10ヶ国以上で上映され、熊本地震の復興支援プロジェクトのために制作した「最終回のうた」では宮城・仙台アニメーション2018グランプリを受賞した。</p>
                        <p>2018年には展示「スケスケ展」を企画・演出し、現在は全国巡回展を目指している。</p>
                    </div>
                </div>
            </li>
            <li class="lecturer">
                <img src="@/assets/helixes-shimura.jpg" class="lecturer-image"/>
                <div class="lecturer-inner">
                    <h3 class="lecturer-name">志村 龍之介</h3>
                    <div class="lecturer-degree">株式会社Helixes CEO</div>
                    <div class="lecturer-description">
                        <p>ゲームOP・TV-CM・番組パッケージなどのディレクションを手がけ、キャラクターを使用した映像表現を得意とする。</p>
                        <p>ゲームOP・TV-CM・番組パッケージなどのディレクションを手がけ、キャラクターを使用した映像表現を得意とする。</p>
                        <p>ゲームOP・TV-CM・番組パッケージなどのディレクションを手がけ、キャラクターを使用した映像表現を得意とする。</p>
                    </div>
                </div>
            </li>
        </ul>
        <div class="comingsoon">And so on...</div>
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
    text-align: left;
    .lecturer-image {
        width: 180px;
        height: 180px;
        background-color: #EEE;
        border-radius: 24px;
        box-shadow: 0 3px 6px rgba(0,0,0,.1);
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
    }
}
</style>

