<template>
    <section class="about" :style="style" id="about">
        <div class="about-video-outer">
        </div>
        <div class="about-inner">
            <section-header title="What is CEiQ?" subtitle="CEiQってなんですか？" isSmall="true" />
            <p>
                <span>CEiQとは、九州のクリエイターや、</span>
                <span>クリエイター志望の学生のための</span>
                <span>交流イベントです。</span>
            </p>
            <p>
                <span>関東や関西では</span>
                <span>日々多くのイベントが行われており、</span>
                <span>普段は顔を見せないクリエイター同士が</span>
                <span>交流するきっかけとなっています。</span>
            </p>
            <p>
                <span>九州のクリエイターにも</span>
                <span>そういった機会を与えたい！</span><br>
                <span>そんな思いのもと、</span>
                <span>CEiQは企画されました。</span>
            </p>
            <p>
                <span>CEiQでは、様々なジャンルの</span>
                <span>クリエイターによる</span>
                <span>講演を予定している他、</span>
                <span>夜には参加者同士の</span>
                <span>交流会も予定しています。</span>
            </p>
        </div>
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
            let y = window.pageYOffset;
            this.$set(this.style,'background-position-y',- y * 1 / 3 + "px");
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
.about {
    min-height: 560px;
    display: flex;
    margin-bottom: 24px;
    overflow: hidden;
    background: url("~@/assets/illust-gray.png") white;
    background-size: 80%;
    background-position: calc(-100% - 15vw) 80%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    box-shadow: 0 3px 6px rgba(black,.2);
    .about-inner {
        padding-bottom: 64px;
        position: relative;
        flex: 1;
        text-align: center;
        overflow: hidden;
        background: linear-gradient(90deg,rgba(white,0) 0%,rgba(white,.8) 10%);//rgba(white,.8);
        p {
            text-align: left;
            margin: 0.5em 64px;

            > span {
                display: inline-block;
            }
        }
        .about-video-blur-outer {
            position: absolute;
            z-index: -1;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 200%;
            height: 200%;
            left: -50%;
            top: -50%;
            background-color: #000;
            video {
                height: 100%;
            }
        }
    }
    .about-video-outer {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: calc(50% - 116px);
        video {
            height: 100%;
        }
    }
}

@media screen and (max-width: 699px) {
    .about {
        background-size: 144vh;
        background-position: right 80%;
        .about-inner {
            background: linear-gradient(90deg,rgba(white,.3) 0%,rgba(white,.8) 20%,rgba(white,.8) 80%,rgba(white,.3) 100%);
        }
        .about-video-outer {
            position: absolute;
            width: 100%;
        }
    }
}
</style>

