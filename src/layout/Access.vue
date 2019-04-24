<template>
    <section class="access" id="access">
        <section-header title="Access" subtitle="会場への行き方" />
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
.access {
    min-height: 560px;
    text-align: center;
    p {
        text-align: left;
        margin: 0.5em 48px;
    }
}
</style>