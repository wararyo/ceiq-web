<template>
    <section class="contact" id="contact">
        <section-header title="Contact" subtitle="連絡先" />
        <div class="contact-message">＼お気軽にお問い合わせください／</div>
        <ul>
            <li><a href="mailto:contact@ceiq.fun"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><title>mail</title><path d="M30.009,11.223a3.334,3.334,0,0,0-.692-1.464,2.718,2.718,0,0,0-.227-.252,3.34,3.34,0,0,0-2.368-.982H9.278a3.345,3.345,0,0,0-2.368.982,2.868,2.868,0,0,0-.227.252,3.363,3.363,0,0,0-.754,2.115V24.126a3.343,3.343,0,0,0,.277,1.33,3.279,3.279,0,0,0,.7,1.037c.075.075.15.144.231.212a3.344,3.344,0,0,0,2.137.77H26.722a3.324,3.324,0,0,0,2.137-.773,2.829,2.829,0,0,0,.231-.209,3.338,3.338,0,0,0,.707-1.037v0a3.31,3.31,0,0,0,.274-1.327V11.874A3.429,3.429,0,0,0,30.009,11.223ZM8.122,10.718a1.617,1.617,0,0,1,1.156-.48H26.722a1.612,1.612,0,0,1,1.156.48,1.591,1.591,0,0,1,.147.172l-9.143,7.968a1.342,1.342,0,0,1-1.763,0l-9.14-7.972A1.179,1.179,0,0,1,8.122,10.718Zm-.48,13.408V12.659l6.617,5.772L7.645,24.2A.554.554,0,0,1,7.642,24.126Zm19.08,1.635H9.278a1.62,1.62,0,0,1-.81-.214l6.978-6.081.651.566a2.9,2.9,0,0,0,3.81,0l.651-.566,6.974,6.081A1.62,1.62,0,0,1,26.722,25.761Zm1.636-1.635a.554.554,0,0,1,0,.072l-6.614-5.763,6.617-5.773Z"/></svg> contact@ceiq.fun</a></li>
            <li><a href="https://twitter.com/ceiq_kyushu"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><title>twitter</title><path d="M31.032,10.537a9.706,9.706,0,0,1-2.833.775,4.961,4.961,0,0,0,2.17-2.73,9.928,9.928,0,0,1-3.134,1.2,4.941,4.941,0,0,0-8.412,4.5A14.011,14.011,0,0,1,8.649,9.124a4.942,4.942,0,0,0,1.528,6.588A4.926,4.926,0,0,1,7.94,15.1v.06A4.935,4.935,0,0,0,11.9,20a4.928,4.928,0,0,1-1.3.174,5.1,5.1,0,0,1-.93-.089,4.952,4.952,0,0,0,4.61,3.43,9.928,9.928,0,0,1-7.312,2.045A14.042,14.042,0,0,0,28.584,13.729c0-.216,0-.428-.014-.639a9.928,9.928,0,0,0,2.462-2.552Z"/></svg> @CEiQ_kyushu</a></li>
            <li><a href="https://www.facebook.com/ceiq.kyushu"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><title>facebook</title><path d="M27.2,6.672H8.8A2.129,2.129,0,0,0,6.672,8.8V27.2A2.129,2.129,0,0,0,8.8,29.328H18V19.416H15.168V16.584H18V15.168a4.255,4.255,0,0,1,4.248-4.248H25.08v2.832H22.248a1.42,1.42,0,0,0-1.416,1.416v1.416H25.08l-.708,2.832h-3.54v9.912H27.2A2.129,2.129,0,0,0,29.328,27.2V8.8A2.129,2.129,0,0,0,27.2,6.672Z"/></svg> CEiQ.kyushu</a></li>
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
a {
    padding-right: 0.5em;
    color: #6e5c61;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &:visited {
        //color: #a03f4c;
    }
}
.contact {
    position: relative;
    z-index: 2;
    min-height: 560px;
    text-align: center;
    background: linear-gradient(135deg, #f5edf2 0%, #ecd5e8 100%);
    box-shadow: 0 3px 6px rgba(black,.2);
    p {
        text-align: left;
        margin: 0.5em 48px;
    }
    svg {
        margin: 0 0.5em;
    }
    .contact-message {
        font-size: 0.9em;
        margin-bottom: 1em;
    }
}
</style>