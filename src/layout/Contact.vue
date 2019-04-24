<template>
    <section class="contact" id="contact">
        <section-header title="Contact" subtitle="連絡先" />
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
.contact {
    min-height: 560px;
    text-align: center;
    p {
        text-align: left;
        margin: 0.5em 48px;
    }
}
</style>