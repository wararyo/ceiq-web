<template>
    <section class="lightningtalk" id="lightningtalk">
        <section-header title="LT会 登壇者募集" subTitle=" " :isSmall="true" />
        <div class="lightningtalk-inner">
            <p>LTとはライトニングトークの略で、短い持ち時間でプレゼンテーションを行うことです。</p>

            <p>CEiQでは、3人の話者が10分間のライトニングトークを行うLT会を企画しています。<br>その3人の話者を、現在募集しています。</p>

            <p>クリエイティビティに関して語りたいことがある学生の方など、どなたでも歓迎です。</p>
            <p>あなたが創作にかける想い、ステージの上で語ってみませんか？</p>

        </div>
        <a class="button" href="https://docs.google.com/forms/d/e/1FAIpQLScijvSwW9sWkQdz4omw95b6LZBmYRTLOFPWm1PmxtmvseCy1Q/viewform?usp=sf_link">LT会に応募する</a>
    </section>
</template>

<script>
import SectionHeader from "@/components/SectionHeader";
export default {
    components: {
        SectionHeader
    }
}
</script>


<style lang="scss" scoped>
.lightningtalk {
    margin: 24px auto;
    padding-bottom: 80px;
    min-height: 560px;
    text-align: center;
    background: linear-gradient(135deg, #e6f7fd 0%, #c6d3df 100%);
    box-shadow: 0 3px 6px rgba(black,.2);
    p {
        text-align: left;
        margin: 0.5em 48px;
    }
    .lightningtalk-inner {
        max-width: 800px;
        width: calc(100% - 32px);
        margin: 0 auto;
        padding-left: 16px;
        text-align: left;
    }

    .lightningtalk-venue {
        font-size: 1.5rem;
        font-weight: bold;
    }
    .lightningtalk-address {
        color: rgba(black,.5);
    }
    .lightningtalk-heading {
        font-weight: bold;
    }
    .button {
        display: inline-block;
        margin-top: 48px;
        padding: 0 48px;
        border: 1px solid #333;
        color: #444;
        text-decoration: none;
        font-weight: bold;
        line-height: 48px;
        border-radius: 24px;
    }
}

@media screen and (max-width: 959px) {
    .lightningtalk {
        iframe {
            margin-bottom: 64px;
        }
        .lightningtalk-inner {
            flex-direction: column;
            align-items: center;
            padding-left: 0;
        }
    }
}
</style>