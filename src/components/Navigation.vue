<template>
    <section class="navigation">
    <ul>
        <li><a href="#lecturers">LECTURERS</a></li>
        <li><a href="#schedule">SCHEDULE</a></li>
        <li><a href="#sponsors">SPONSOR</a></li>
        <li><a href="#access">ACCESS</a></li>
        <li><a href="#contact">CONTACT</a></li>
    </ul>
    <div class="navigation-mobile" v-on:click="$emit('toggleMobileMenu')">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs></defs><title>hamburger</title><rect x="14" y="14" width="20" height="2"/><rect class="cls-1" x="14" y="32" width="20" height="2"/><rect class="cls-1" x="14" y="23" width="20" height="2"/></svg>
    </div>
    </section>
</template>

<script>
export default {
    methods: {
        toggleMenu: function() {
            this.$menuIsOpen = !this.$menuIsOpen;
        }
    },
    watch: {
        $menuIsOpen: function() {
            console.log(this.$menuIsOpen);
        }
    }
}
</script>


<style lang="scss" scoped>
.navigation {
    display:flex;
    align-items: center;
    ul {
    display: flex;
    align-items: stretch;
    list-style-type: none;
    font-size: 1.1em;
    font-family: menco, sens-serif;
    font-style: italic;
    font-weight: 700;
    li {
        margin-left: 24px;
        transform: translateY(2px);
        &:first-child {
            margin: 0;
        }
    }
    a {
        display: flex;
        align-items: center;
        position: relative;
        padding: 16px 0;
        height: 100%;
        color: #333;
        text-decoration: none;
        &:after {
            content: "";
            display: block;
            position: absolute;
            background-color: #333;
            width: 0;
            bottom: calc(50% - 0.5em - 4px);
            height: 2px;
            left: -4px;
            transition: width .3s;
            border-radius: 2px;
        }
        &:hover,.is-active {
            &:after {
                width: calc(100% + 7px);
            }
        }
    }
    }
}
.navigation-mobile {
    display: none;
    color: black;
    height: 48px;
}
@media screen and (max-width: 699px) {
.navigation ul {
    display: none;
    position: absolute;
    left: 50%;
    top: 50%;
    width: calc(100vw - 48px);
    transform: translate(-50%,-50%);
    background-color: white;

    /*&.is-shown {
        display: block;
    }*/
}
.navigation-mobile {
    display: block;
}
}
</style>
