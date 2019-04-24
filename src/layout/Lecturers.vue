<template>
    <section class="lecturers" id="lecturers">
        <section-header title="Lecturers" subtitle="講師陣" />
        <ul>
            <li class="lecturer">
                <img src="@/assets/logo-text.svg" class="lecturer-image"/>
                <div class="lecturer-inner">
                    <h3 class="lecturer-name">江口 カン</h3>
                    <div class="lecturer-degree">空気株式会社 取締役会長</div>
                    <div class="lecturer-description">
                        <p>福岡生まれ。九州芸術工科大学 画像設計学科卒業。'97年 KOO-KI 共同設立。
                        CMなどエンターテインメント性の高い作品の演出を多く手がける。</p>
                        <p>(KOO-KIのどなたが来るかわからないので仮で入れてます)</p>
                    </div>
                </div>
            </li>
            <li class="lecturer">
                <img src="@/assets/logo-text.svg" class="lecturer-image"/>
                <div class="lecturer-inner">
                    <h3 class="lecturer-name">飼育 太郎</h3>
                    <div class="lecturer-degree">飼育株式会社 CEO</div>
                    <div class="lecturer-description">
                        <p>文章</p>
                    </div>
                </div>
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
.lecturers {
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
}

.lecturer {
    max-width: 996px;
    width: calc(100% - 32px);
    margin: 24px auto;
    display: flex;
    text-align: left;
    .lecturer-image {
        width: 180px;
        height: 240px;
        background-color: #EEE;
        border-radius: 24px;
        box-shadow: 0 3px 6px rgba(0,0,0,.1);
    }
    .lecturer-inner {
        margin-left: 36px;
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
}
</style>

