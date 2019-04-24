<template>
    <nav :class="{'is-hidden':isHidden}">
        <a class="sticky-logo" href="#"><img class="" src="@/assets/logo-text.svg" alt="CEiQ"></a>
        <navigation />
    </nav>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
    components: {
        Navigation
    },
    data: function() {
        return {
            isHidden : true
        }
    },
    methods: {
        onScroll: function() {
            this.isHidden = (window.pageYOffset < window.innerHeight);            
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);        
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    }
}
</script>


<style lang="scss" scoped>
nav {
    position:fixed;
    z-index: 20;
    top: 0;
    width: calc(100% - 32px);
    height: 80px;
    margin: 16px;
    padding: 0 26px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    border-radius: 40px;
    background: linear-gradient(122deg,rgba(#f9f7e7, .9) 0%, rgba(#f9e5e9, .9) 53.1%, rgba(#e9fdfe, .9) 100%);
    backdrop-filter: blur(20px);
    box-shadow: 0px 5px 10px rgba(112, 40, 52,.1);
    transition: top .3s, opacity .2s;

    &.is-hidden {
        top: -96px;
        opacity: 0;
    }

    .sticky-logo {
        display: flex;
        align-items: center;
        img {
            height: 36px;
        }
    }
}
</style>
