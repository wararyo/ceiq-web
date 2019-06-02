<template>
    <section class="about" id="about">
        <video src="" />
        <div class="about-inner">
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
    video {
        width: calc(50% - 116px);
        background-color: #000;
    }
    .about-inner {
        flex: 1;
        text-align: center;
        p {
            text-align: left;
            margin: 0.5em 48px;
        }
    }
}
</style>

