<template>
    <section class="sponsors" id="sponsors">
        <section-header title="Sponsors" subtitle="スポンサー" />
        <div>
            <img class="" src="@/assets/kooki.svg" width="297" alt="空気株式会社">
        </div>
        <div class="comingsoon">And so on...</div>
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
    margin: 24px auto;
    min-height: 560px;
    text-align: center;
    background: linear-gradient(135deg, #e6f7fd 0%, #c6d3df 100%);
    box-shadow: 0 3px 6px rgba(black,.2);
    p {
        text-align: left;
        margin: 0.5em 48px;
    }
    .comingsoon {
        margin-top: 36px;
        color: rgba(black,.2);
        font-size: 2.5rem;
        font-family: menco, sens-serif;
    }
}
</style>