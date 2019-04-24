<template>
    <section class="about" id="about">
        <video src="" />
        <div class="about-inner">
            <section-header title="What is CEiQ?" subtitle="CEiQってなんですか？" isSmall="true" />
            <p>CEiQとは、九州のクリエイター交流イベントです。</p>
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

