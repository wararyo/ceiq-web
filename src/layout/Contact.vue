<template>
    <section class="contact" id="contact">
        <section-header title="Contact" subtitle="連絡先" />
        <div class="contact-message">＼お気軽にお問い合わせください／</div>
        <ul>
            <li>[mail] ceiq-2019@gmail.com</li>
            <li>[twitter] @CEiQ-kyushu</li>
            <li>[facebook] @CEiQ-kyushu</li>
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
.contact {
    min-height: 560px;
    text-align: center;
    background: linear-gradient(135deg, #f5edf2 0%, #ecd5e8 100%);
    p {
        text-align: left;
        margin: 0.5em 48px;
    }
    .contact-message {
        font-size: 0.9em;
    }
}
</style>