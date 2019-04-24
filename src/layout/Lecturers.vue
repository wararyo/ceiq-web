<template>
    <section class="lecturers" id="lecturers">
        <section-header title="Lecturers" subtitle="講師陣" />
        <ul>
            <li class="lecturer">

            </li>
        </ul>
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
.lecturers {
    min-height: 560px;
    text-align: center;
    p {
        text-align: left;
        margin: 0.5em 48px;
    }
}
</style>

