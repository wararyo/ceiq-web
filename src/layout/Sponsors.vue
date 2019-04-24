<template>
    <section class="sponsors" id="sponsors">
        <section-header title="Sponsors" subtitle="スポンサー" />
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
    p {
        text-align: left;
        margin: 0.5em 48px;
    }
}
</style>