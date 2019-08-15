<template>
    <section class="schedule" :style="style" id="schedule">
        <section-header title="Schedule" subtitle="イベントの日程" />
        <ul class="events">
            <li class="is-whole is-line">
                <time>13:00</time>
                <h3>オリエンテーション</h3>
            </li>
            <li class="is-lecture is-line">
                <time>13:30</time>
                <div>
                    <h3>講演その1</h3>
                    <p>詳細は後日掲載します。</p>
                </div>
            </li>
            <li class="is-break is-line">
                <span>休憩 10分</span>
            </li>
            <li class="is-lecture is-line">
                <time>14:10</time>
                <div>
                    <h3>講演その2</h3>
                    <p>詳細は後日掲載します。</p>
                </div>
            </li>
            <li class="is-break is-line">
                <span>休憩 10分</span>
            </li>
            <li class="is-lecture is-line">
                <time>14:50</time>
                <div>
                    <h3>講演その3</h3>
                    <p>詳細は後日掲載します。</p>
                </div>
            </li>
            <li class="is-break">
                <span>休憩 30分</span>
            </li>
            <li class="is-lecture is-line">
                <time>15:50</time>
                <div>
                    <h3>LT会</h3>
                    <p>今の思いを語りたい若者たち5人が、10分間のライトニングトークを行います。</p>
                </div>
            </li>
            <li class="is-break is-line">
                <span>休憩 10分</span>
            </li>
            <li class="is-lecture is-line">
                <time>16:30</time>
                <div>
                    <h3>講演その4</h3>
                    <p>詳細は後日掲載します。</p>
                </div>
            </li>
            <li class="is-whole">
                <time>17:00</time>
                <h3>閉会式</h3>
            </li>
            <li class="is-special">
                <time>18:30</time>
                <h3>立食交流会</h3>
            </li>
        </ul>
        <div class="supplement">スケジュールは変更される可能性があります。その際はTwitterやFacebookでお知らせします。</div>
    </section>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";
export default {
    components: {
        SectionHeader
    },
    data: function() {
        return {
            style: {}
        }
    },
    methods: {
        onScroll: function() {
            let y = this.$el.getBoundingClientRect().top;
            this.$set(this.style,'background-position-y',y * 1 / 3 - 200 + "px, 0");
        }
    },
    mounted() {
        if(!this.isMobile()) window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
        if(!this.isMobile()) window.removeEventListener('scroll', this.onScroll);
    }
}
</script>


<style lang="scss" scoped>
.schedule {
    margin: 24px auto;
    min-height: 560px;
    padding-bottom: 80px;
    text-align: center;
    background: url("~@/assets/illust-gray.png"), linear-gradient(135deg, #f5edf2 0%, #ecd5e8 100%);
    background-size: 150%, 100%;
    background-position: center 80%, 0 0;
    background-repeat: no-repeat;
    background-attachment: fixed, scroll;
    background-blend-mode: overlay;
    color: #333;
    box-shadow: 0 3px 6px rgba(black,.2);

    p {
        text-align: left;
        margin: 0.5em 0;
    }
    .supplement {
        color: rgba(black, .4);
        font-size: 0.8rem;
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

@media screen and (max-width: 599px) {
    .events {
        li {
            > * {
                width: calc(100% - 72px - 72px);
            }
            &.is-line:after, &:before { //線
                left: 72px+36px;
            }
        }
        time {
            width: 72px;
        }
    }
}
</style>

