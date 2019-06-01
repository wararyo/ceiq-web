<template>
    <ul class="navigation">
        <li><a href="#lecturers">LECTURERS</a></li>
        <li><a href="#schedule">SCHEDULE</a></li>
        <li><a href="#sponsors">SPONSOR</a></li>
        <li><a href="#access">ACCESS</a></li>
        <li><a href="#contact">CONTACT</a></li>
    </ul>
</template>

<style lang="scss" scoped>
.navigation {
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
</style>
