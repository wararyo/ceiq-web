<template>
    <section class="sponsors" id="sponsors">
        <section-header title="Sponsors" subtitle="スポンサー" />
        <div class="comingsoon">Coming Soon!</div>
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
.sponsors {
    min-height: 560px;
    text-align: center;
    background: linear-gradient(135deg, #e6f7fd 0%, #c6d3df 100%);
    p {
        text-align: left;
        margin: 0.5em 48px;
    }
    .comingsoon {
        margin-top: 32px;
        color: rgba(black,.2);
        font-size: 3rem;
        font-family: menco, sens-serif;
    }
}
</style>