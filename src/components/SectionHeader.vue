<template>
    <h2 class="sectionheader" :class="{'is-small':isSmall, 'hidden':!isVisible}">
        <span class="sectionheader-main"><span v-for="item in letters" :key="item.id" :style="item.delay" v-html="item.text"></span></span>
        <span class="sectionheader-sub">{{subtitle}}</span>
    </h2>
</template>

<script>
export default {
    props: ['title', 'subtitle', 'isSmall'],
    data: function() {
        return {
            height: 0,
            position: 0,
            isVisible: false
        };
    },
    computed: {
        letters: function() {
            const l = [];
            const _texts = this.title.split('');
            for(let i = 0;i < _texts.length; i++) {
                l.push({
                    text: (_texts[i] === " ")?`&nbsp;`:_texts[i],
                    id: i,
                    delay: `animation-delay: ${i*0.03 + 0.1}s`
                });
            }
            return l;
        }
    },
    watch: {
        position: function() {
            if(this.position < this.height*0.9) this.isVisible = true;
        }
    },
    mounted() {
        window.addEventListener('resize', this.onResize);
        window.addEventListener('scroll', this.onScroll);
        window.addEventListener('load', ()=> {
            this.onResize();//heightを先に代入する必要がある
            this.onScroll();
        });
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
        window.removeEventListener('scroll', this.onScroll);
    },
    methods: {
        onScroll () {this.position = (this.$el)?this.$el.getBoundingClientRect().top:this.height;},
        onResize () {this.height = document.documentElement.clientHeight}
    }
}
</script>

<style lang="scss" scoped>
.sectionheader {
    display: inline-block;
    margin: 100px;
    > span {
        display: block;
        font-weight: normal;
        white-space: nowrap;
    }
    .sectionheader-main {
        margin: 0 24px -0.12em;
        line-height: 1em;
        vertical-align: bottom;
        font-size: 4rem;
        font-family: menco, sens-serif;
        font-style: italic;
        font-weight: 700;
        color: #444;
        overflow: hidden;
        > span {
            display: inline-block;
        }
    }
    .sectionheader-sub {
        font-size: 1rem;
        font-weight: bold;
        line-height: 32px;
        color: #FFF;
        background-color: #444;
        border-radius: 16px;
        transition: color .7s cubic-bezier(0.04, 0.79, 0.3, 1);
    }
    &.hidden {
        .sectionheader-main {
            visibility: hidden;
        }
        .sectionheader-sub {
            color: rgba(white,.0);
        }
    }
    &:not(.hidden) {
        .sectionheader-main > span {
            animation: slide-in 0.7s cubic-bezier(0.04, 0.79, 0.3, 1) 1 normal both running;
        }
    }
    &.is-small {
        .sectionheader-main {
            font-size: 3rem;
        }
    }
    @keyframes slide-in {
        0% {
            transform:translate(-10%,100%);
            opacity: 0;
        }
        100% {
            transform:translate(0,0);
            opacity: 1;
        }
    }
}
</style>


