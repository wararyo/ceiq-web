<template>
    <section class="about" :style="style" id="about">
        <div class="about-video-outer">
        </div>
        <div class="about-inner">
            <section-header title="What is CEiQ?" subtitle="CEiQってなんですか？" isSmall="true" />
            <p>CEiQとは、九州のクリエイターや、<br>クリエイター志望の学生のための交流イベントです。</p>
            <p>
                関東や関西では日々多くのイベントが行われており、<br>
                普段は顔を見せないクリエイター同士が交流するきっかけとなっています。
            </p>
            <p>
                九州のクリエイターにもそういった機会を与えたい！<br>
                そんな思いのもと、CEiQは企画されました。
            </p>
            <p>
                CEiQでは、様々なジャンルのクリエイターによる講演を予定している他、夜には参加者同士の交流会も予定しています。
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
        window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    }
}
</script>


<style lang="scss" scoped>
.about {
    min-height: 560px;
    display: flex;
    margin-bottom: 24px;
    padding-bottom: 64px;
    overflow: hidden;
    background: url("~@/assets/illust-gray.png") white;
    background-size: 80%;
    background-position: calc(-100% - 15vw) 80%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    box-shadow: 0 3px 6px rgba(black,.2);
    .about-inner {
        position: relative;
        flex: 1;
        text-align: center;
        overflow: hidden;
        background: linear-gradient(90deg,rgba(white,0) 0%,rgba(white,.8) 10%);//rgba(white,.8);
        p {
            text-align: left;
            margin: 0.5em 64px;
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
        .about-video-outer {
            position: absolute;
            width: 100%;
        }
    }
}
</style>

