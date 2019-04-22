<template>
    <ul class="navigation">
        <li><a href="#">HOME</a></li>
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
    align-items: center;
    list-style-type: none;
    font-style: italic;
    li {
        margin-left: 24px;
        &:first-child {
            margin: 0;
        }
    }
    a {
        color: #555;
        text-decoration: none;
    }
}
</style>
