<template>
    <section class="schedule" id="schedule">
        <section-header title="Schedule" subtitle="イベントの日程" />
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
.schedule {
    min-height: 560px;
    text-align: center;
    p {
        text-align: left;
        margin: 0.5em 48px;
    }
}
</style>

