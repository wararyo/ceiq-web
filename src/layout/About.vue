<template>
    <section class="about" id="about">
        <div class="about-video-outer">
            <video id="about-video" src="@/assets/movie.mp4" autoplay muted loop/>
        </div>
        <div class="about-inner">
            <div class="about-video-blur-outer"><video id="about-video-blur" src="@/assets/movie_blur.mp4" autoplay muted loop/></div>
            <section-header title="What is CEiQ?" subtitle="CEiQってなんですか？" isSmall="true" />
            <p>CEiQとは、九州のクリエイターや、クリエイター志望の学生のための交流イベントです。</p>
            <p>
                関東や関西では日々多くのイベントが行われており、普段は顔を見せないクリエイター同士が交流するきっかけとなっています。<br>
                九州のクリエイターにもそういった機会を与えたい！そんな思いのもと、CEiQは企画されました。
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
    }
}
</script>


<style lang="scss" scoped>
.about {
    min-height: 560px;
    display: flex;
    overflow: hidden;
    .about-inner {
        position: relative;
        flex: 1;
        text-align: center;
        overflow: hidden;
        p {
            text-align: left;
            margin: 0.5em 48px;
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
        background-color: #000;
        box-shadow: 2px 0px 10px rgba(0,0,0,.3);
        video {
            height: 100%;
        }
    }
}
</style>

