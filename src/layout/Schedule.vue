<template>
    <section class="schedule" id="schedule">
        <section-header title="Schedule" subtitle="イベントの日程" />
        <ul class="events">
            <li class="is-whole is-line">
                <time>13:00</time>
                <h3>オリエンテーション</h3>
            </li>
            <li class="is-lecture is-line">
                <time>13:30</time>
                <div>
                    <h3>講義その1 / 飼育 太郎</h3>
                    <p>講義の解説講義の解説講義の解説講義の解説講義の解説講義の解説講義の解説講義の解説講義の解説講義の解説講義の解説講義の解説</p>
                    <p>講義の解説講義の解説講義の解説講義の解説講義の解説講義の解説講義の解説講義の解説講義の解説講義の解説講義の解説講義の解説</p>
                </div>
            </li>
            <li class="is-break is-line">
                <span>休憩 10分</span>
            </li>
            <li class="is-whole">
                <time>19:40</time>
                <h3>閉会式</h3>
            </li>
            <li class="is-special">
                <time>20:00</time>
                <h3>立食交流会</h3>
            </li>
        </ul>
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
.schedule {
    min-height: 560px;
    padding-bottom: 80px;
    text-align: center;
    background: linear-gradient(60deg, #f5edf2 0%, #ecd5e8 100%);
    color: #333;

    p {
        text-align: left;
        margin: 0.5em 0;
    }
}

.events {
    list-style-type: none;
    text-align: left;
    max-width: 996px;
    width: calc(100% - 32px);
    margin: 24px auto;
    li {
        display: flex;
        justify-content: flex-end;
        padding-bottom: 24px;
        position: relative;

        > * {
            width: calc(100% - 156px - 72px);
        }
        &:before { //点
            content: "";
            display: block;
            position: absolute;
            z-index: 2;
            font-size: 1.25rem;//topをemで指定するために使用
            top: 0.75em;
            left: 156px+36px;
            height: 24px;
            width: 24px;
            transform: translate(-50%,-50%);
            background-color: #FFF;
            border-radius: 50%;
            border: 5px solid #444;
        }
        &.is-line:after { //線
            content: "";
            display: block;
            position: absolute;
            z-index: 1;
            font-size: 1.25rem;//topをemで指定するために使用
            top: 0.75em;
            left: 156px+36px;
            width: 0px;
            bottom: -24px;
            transform: translateX(-2.5px);
            border-left: 5px dotted #444;

        }
        &.is-lecture:before {
            background-color: #5EC8FF;
        }
        &.is-special:before {
            background-color: #F34F11;
        }
        &.is-break {
            span {
                margin: 0;
                padding: 0;
                color: rgba(#000,.5);
            }
            &:before {
                width: 16px;
                height: 16px;
                background-color: #444;
            }
        }
    }
    time {
        width: 156px;
        margin-right: 72px;
        line-height: 1.5em;
        text-align: right;
        font-size: 1.25rem;
        font-weight: bold;
        transform: translateY(1px);
    }
    h3 {
        line-height: 1.5em;
        font-size: 1.25rem;
    }
}
</style>

