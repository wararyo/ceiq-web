<template>
    <section class="access" id="access">
        <section-header title="Access" subtitle="会場への行き方" />
        <div class="access-inner">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4069.6655814206533!2d130.42576652611183!3d33.56000723111951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541910203236607%3A0x119c78cca52e55ba!2z5Lmd5bee5aSn5a2mIOWkp-api-OCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1559197520125!5m2!1sja!2sjp" width="486" height="366" frameborder="0" style="border:0" allowfullscreen></iframe>
            <div class="access-description">
                <div class="access-venue">九州大学 大橋キャンパス</div>
                <div class="access-address">〒815-8540　福岡市南区塩原4-9-1<br>西鉄大橋駅より徒歩5分</div>
                <ul>
                    <li><span class="access-heading">空路</span><br>福岡空港→(地下鉄空港線)→「天神駅」→「西鉄福岡駅」→(西鉄天神大牟田線)→「西鉄大橋駅」</li>
                    <li><span class="access-heading">JR</span><br>「JR博多駅」→(地下鉄空港線)→「天神駅」→「西鉄福岡駅」→(西鉄天神大牟田線)→「西鉄大橋駅」
</li>
                    <li><span class="access-heading">西鉄</span><br>「西鉄福岡駅」→(西鉄天神大牟田線)→「西鉄大橋駅」</li>
                </ul>
            </div>
        </div>
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
.access {
    margin: 24px auto;
    padding-bottom: 80px;
    min-height: 560px;
    text-align: center;
    background: linear-gradient(60deg,#f5f5ed 0%, #e9e7d9 100%);
    box-shadow: 0 3px 6px rgba(black,.2);
    p {
        text-align: left;
        margin: 0.5em 48px;
    }
    iframe {
        box-shadow: 0 2px 4px rgba(black,.16);
    }
    .access-inner {
        max-width: 1200px;
        width: calc(100% - 32px);
        margin: 0 auto;
        padding-left: 16px;
        display: flex;
    }
    .access-description {
        flex: 1;
    }
    ul {
        margin: 48px 24px 0;
        padding-left: 2em;
        text-align: left;
        font-size: 0.9rem;
        list-style-type: none;
        li {
            margin: 1em;
        }
    }

    .access-venue {
        font-size: 1.5rem;
        font-weight: bold;
    }
    .access-address {
        color: rgba(black,.5);
    }
    .access-heading {
        font-weight: bold;
    }
}
</style>