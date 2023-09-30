<script lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, defineComponent } from 'vue';
import TopFooterCard from "./TopFooterCard.vue"
import LogoComponent from "../Header/LogoComponent.vue"
``
export default defineComponent({
    components: {
        TopFooterCard,
        LogoComponent
    },
    setup() {
        const cardData = ref([
            { name: 'ion', icon: "uiw:mobile", header: 'Bize Ulaşın', link: '', linkHeader: 'İletişime Geç' },
            { name: 'ion', icon: "circum:percent", header: 'Kampanyalar', link: '', linkHeader: 'Detaylı İncele' },
            { name: 'ion', icon: "clarity:share-line", header: 'Bizi Takip Edin', link: '', linkHeader: 'Sosyal Mediyamız' },
            { name: 'ion', icon: "material-symbols:support-agent", header: 'Bizi Arayın', link: '', linkHeader: '+90 850 000 00 00' },
        ])
        // const links = ref([
        //     {name: ''}
        // ])
        // const main2 = ref();
        // let context: gsap.Context;
        // gsap.registerPlugin(ScrollTrigger);

        // onMounted(() => {
        //     context = gsap.context((context) => { })
        //     context.add(() => {
        //         gsap.to('.scrollFooter', {
        //             scrollTrigger: {
        //                 trigger: ".scrollFooter",
        //                 start: "top 70%",
        //                 end: "top 70%",
        //                 toggleActions: "restart none reverse none",
        //                 markers: true
        //             },
        //             duration: 1,
        //             opacity: 1,
        //             y: -100,
        //             backgroundColor: 'red'

        //         })
        //     })
        // });

        // onUnmounted(() => {
        //     context.revert(); // <- Easy Cleanup!
        // });
        return {
            cardData,
        };
    },
});
</script>


<template>
    <div class="flex flex-col justify-center items-center border-t-2 fontFamilyCinzel overflow-hidden" ref="main2">
        <section class="border-b w-full md:py-10">
            <div class="myCostumContainer">
                <div class="flex flex-row flex-wrap justify-center w-full scrollFooter">
                    <top-footer-card v-for="(data, index) in cardData" :key="index" :data="data" />
                </div>
            </div>
        </section>
        <section class="myCostumContainer flex flex-row flex-wrap md:py-10 w-full">
            <div class="lg:basis-1/4 sm:basis-1/2 basis-full text-center">
                <h1 class="font-semibold my-5">UZUN DÖNEM FİLO KİRALAMA</h1>
                <ul class="text-xs font-medium pl-1 mb-5 footerList">
                    <li>Filo Kiralamanın Avantajları</li>
                    <li>Kiralama - Satın Alma Karşılaştırma</li>
                    <li>Teklif Al</li>
                </ul>
            </div>
            <div class="lg:basis-1/4 sm:basis-1/2 basis-full text-center">
                <h1 class="font-semibold my-5">KURUMSAL</h1>
                <ul class="text-xs font-medium pl-1 mb-5 footerList">
                    <li>Hakkımızda</li>
                    <li>Tarihçe</li>
                    <li>Kültür & Değerlerimiz</li>
                    <li>Basında Biz</li>
                    <li>Başkan'ın Mesajı</li>
                </ul>
            </div>
            <div class="lg:basis-1/4 sm:basis-1/2 basis-full text-center">
                <h1 class="font-semibold my-5">İLETİŞİM</h1>
                <ul class="text-xs font-medium pl-1 mb-5 footerList">
                    <li>Bize Mesaj Yazın</li>
                    <li>İletişim Bilgileri</li>
                </ul>
            </div>
            <div class="lg:basis-1/4 sm:basis-1/2 basis-full text-center">
                <h1 class="font-semibold my-5">HİZMETLER</h1>
                <ul class="text-xs font-medium pl-1 mb-5 footerList">
                    <li><router-link to="/hizmetler/yedek-arac-hizmeti">Yedek Araç Hizmeti</router-link></li>
                    <li><router-link to="/">Lastik Yönetim Hizmeti</router-link></li>
                    <li><router-link to="/">Periyodik Bakım Hizmeti</router-link></li>
                    <li><router-link to="/">HGS Yönetim Hizmeti</router-link></li>
                    <li><router-link to="/">Hasar Yönetim Hizmeti</router-link></li>
                </ul>
            </div>
        </section>
        <section class=" border-t-2 w-full py-3">
            <div class="flex lg:flex-row flex-col justify-between items-center px-10">
                <div class="flex md:flex-row flex-col flex-wrap gap-x-4 py-2 text-xs text-center">
                    <div class=""><router-link to="/">Gizlilik Politikası</router-link></div>
                    <div class=""><router-link to="/">Çerez Politikası</router-link></div>
                    <div class=""><router-link to="/">Kişisel Verilerin Kurunması kanunu</router-link></div>
                    <div class=""><router-link to="/">Kullanım kuşulları</router-link></div>
                </div>
                <logo-component logo-src="/" />
            </div>
        </section>
    </div>
</template>

<style scoped>
.footerList li {
    margin-bottom: 4px;
}
</style>