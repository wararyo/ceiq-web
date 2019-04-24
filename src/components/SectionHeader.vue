<template>
    <h2 class="sectionheader" :class="{'is-small':isSmall}">
        <span class="sectionheader-main">{{title}}</span>
        <span class="sectionheader-sub">{{subtitle}}</span>
    </h2>
</template>

<script>
export default {
    props: ['title', 'subtitle', 'isSmall'],
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
        margin: 0 24px -0.12em;
        line-height: 1em;
        vertical-align: bottom;
        font-size: 4rem;
        font-family: menco, sens-serif;
        font-style: italic;
        font-weight: 700;
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


