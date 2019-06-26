<template>
    <section class="lecturers" id="lecturers">
        <section-header title="Lecturers" subtitle="講師陣" />
        <ul>
            <li class="lecturer">
                <img src="@/assets/kooki-shirakawa.jpg" class="lecturer-image"/>
                <div class="lecturer-inner">
                    <h3 class="lecturer-name">白川 東一</h3>
                    <div class="lecturer-degree">空気株式会社 ディレクター</div>
                    <div class="lecturer-description">
                        <p>’74年大阪生まれ。</p>
                        <p>ゲームOP・TV-CM・番組パッケージなどのディレクションを手がけ、キャラクターを使用した映像表現を得意とする。</p>
                        <p>ゲームOP・TV-CM・番組パッケージなどのディレクションを手がけ、キャラクターを使用した映像表現を得意とする。</p>
                        <p>ゲームOP・TV-CM・番組パッケージなどのディレクションを手がけ、キャラクターを使用した映像表現を得意とする。</p>
                        <p>ゲームOP・TV-CM・番組パッケージなどのディレクションを手がけ、キャラクターを使用した映像表現を得意とする。</p>
                    </div>
                </div>
            </li>
        </ul>
        <div class="comingsoon">And so on...</div>
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
.lecturers {
    margin-top: 24px;
    padding-bottom: 80px;
    text-align: center;
    background: linear-gradient(60deg,#f5f5ed 0%, #e9e7d9 100%);
    p {
        text-align: left;
        margin: 0.5em 0;
    }
    ul {
        list-style-type: none;
    }
    .comingsoon {
        margin: 48px;
        color: rgba(black,.2);
        font-size: 3rem;
        font-family: menco, sens-serif;
    }
}

.lecturer {
    max-width: 996px;
    width: calc(100% - 32px);
    margin: 24px auto;
    display: flex;
    text-align: left;
    .lecturer-image {
        width: 180px;
        height: 180px;
        background-color: #EEE;
        border-radius: 24px;
        box-shadow: 0 3px 6px rgba(0,0,0,.1);
    }
    .lecturer-inner {
        margin-left: 36px;
        flex: 1;
    }
    .lecturer-name {
        margin-top: 13px;
        font-size: 2rem;
        line-height: 1.5em;
        font-weight: bold;
    }
    .lecturer-degree {
        margin-bottom: 16px;
        color: rgba(#000, .5);
    }

    &.disabled {
        .lecturer-image {
            background-color: #555;
            padding: 48px;
            opacity: .2;
            box-shadow: none;
        }
        .lecturer-name {
            display: inline-block;
            margin-bottom: .2em;
            min-width: 30%;
            background-color: rgba(#555,.2);
            border-radius: 1em;
        }
        .lecturer-degree {
            display: block;
            width: 50%;
            background-color: rgba(#555,.1);
            border-radius: 8px;
        }
        .lecturer-description p {
            display: block;
            width: 100%;
            background-color: rgba(#555,.05);
            border-radius: 8px;
        }
    }
}
</style>

