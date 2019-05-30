<template>
    <section class="lecturers" id="lecturers">
        <section-header title="Lecturers" subtitle="講師陣" />
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
.lecturers {
    padding-bottom: 80px;
    text-align: center;
    background: linear-gradient(60deg,#f5f5ed 0%, #e9e7d9 100%);
    p {
        text-align: left;
        margin: 0.5em 0;
    }
    ul {
        list-style-type: none;
    }
    .comingsoon {
        margin: 32px;
        color: rgba(black,.2);
        font-size: 3rem;
        font-family: menco, sens-serif;
    }
}

.lecturer {
    max-width: 996px;
    width: calc(100% - 32px);
    margin: 24px auto;
    display: flex;
    text-align: left;
    .lecturer-image {
        width: 180px;
        height: 240px;
        background-color: #EEE;
        border-radius: 24px;
        box-shadow: 0 3px 6px rgba(0,0,0,.1);
    }
    .lecturer-inner {
        margin-left: 36px;
    }
    .lecturer-name {
        margin-top: 13px;
        font-size: 2rem;
        line-height: 1.5em;
        font-weight: bold;
    }
    .lecturer-degree {
        margin-bottom: 16px;
        color: rgba(#000, .5);
    }
}
</style>

