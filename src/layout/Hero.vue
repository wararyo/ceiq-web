<template>
    <header>
        <div class="hero-heading">
            <navigation />
            <share />
        </div>
        <h1><img src="" alt="CEiQ"></h1>
        <div class="hero-description">
            <p><span class="is-big">2019</span>年 <span class="is-big">9/22</span>(日) 13:00 -</p>
            <p><span class="is-big">九州大学 大橋キャンパス</span>にて開催</p>
            <p>無料 (事前の予約が必要)</p>
        </div>
        <div class="arrow-down">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 56 56"><title>arrow-down</title><path d="M28,39a2.988,2.988,0,0,1-2.121-.879l-16-16a3,3,0,0,1,4.242-4.242L28,31.758,41.879,17.879a3,3,0,0,1,4.242,4.242l-16,16A2.989,2.989,0,0,1,28,39Z"/></svg>
        </div>
    </header>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Share from '@/components/Share.vue'
export default {
    components: {
        Navigation,
        Share
    }
}
</script>

<style lang="scss" scoped>
header {
    height: calc(100vh - 24px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(122deg,#f5f0b1 0%, #f5bfc6 50%, #c5eeef 100%);
    box-shadow: 0px 3px 6px rgba(112, 40, 52, 0.2);
    .hero-heading {
        align-self: stretch;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 36px;
    }
    h1 {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .hero-description {
        margin-bottom: 5vh;
        text-align: center;
        font-weight: bold;
        color: rgba(#000,.75);
        .is-big {
            font-size: 1.5em;
        }
    }
    .arrow-down {
        color: rgba(#000, .3);
        margin: 16px;
        animation: arrow-down 1.2s cubic-bezier(0.07,0.76,0.54,0.96) infinite;
    }
}

@keyframes arrow-down {
    0% {
        transform: translateY(-40%);
        opacity: 0;
    }
    25% {
        opacity: 1;
    }
    75% {
        opacity: 1;
    }
    100% {
        transform: translateY(0%);
        opacity: 0;
    }
}
</style>

