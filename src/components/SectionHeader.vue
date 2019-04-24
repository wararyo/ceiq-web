<template>
    <h2 class="sectionheader" :class="{'is-small':isSmall}">
        <span class="sectionheader-main">{{title}}</span>
        <span class="sectionheader-sub">{{subtitle}}</span>
    </h2>
</template>

<script>
var WebFont = require("webfontloader");
export default {
    props: ['title', 'subtitle', 'isSmall'],
    mounted() {
        let config = {
            typekit: {
                id: 'gvr6tqd'
            }
        };
        WebFont.load(config);
    }
}
</script>

<style lang="scss" scoped>
.sectionheader {
    display: inline-block;
    margin: 100px;
    span {
        display: block;
        font-weight: normal;
        white-space: nowrap;
    }
    .sectionheader-main {
        margin: 0 24px -0.25em;
        line-height: 1em;
        font-size: 4rem;
        font-family: co-headline, sans-serif;
        color: #444;
    }
    .sectionheader-sub {
        font-size: 1rem;
        font-weight: bold;
        line-height: 32px;
        color: #FFF;
        background-color: #444;
        border-radius: 16px;
    }
    &.is-small {
        .sectionheader-main {
            font-size: 3rem;
        }
    }
}
</style>


