<script lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, defineComponent } from 'vue';
import TopFooterCard from "./TopFooterCard.vue"
import LogoComponent from "../Header/LogoComponent.vue"

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
        // gsap.registerPlugin(ScrollTrigger);
        // const main = ref();
        // let cty: gsap.Context;

        // onMounted(() => {
        //     ScrollTrigger.refresh()
        //     setTimeout(() => {
        //         cty = gsap.context((self) => {
        //             const boxes = document.querySelectorAll('.scrollFooter')
        //             console.log(boxes)
        //             boxes.forEach(box => {
        //                 gsap.from(box, {
        //                     y: 100,
        //                     opacity: 0,
        //                     duration: 1,
        //                     scrollTrigger: {
        //                         trigger: ".scrollFooter",
        //                         start: "0% 80%",
        //                         end: "top 80%",
        //                         markers: true,
        //                         toggleActions: "restart none reverse none"
        //                     },
        //                 });
        //             })
        //             // gsap.from('.scrollFooter', {
        //             //     y: 100,
        //             //     opacity: 0,
        //             //     duration: 1,
        //             //     scrollTrigger: {
        //             //         trigger: ".scrollFooter",
        //             //         start: "0% 80%",
        //             //         end: "top 80%",
        //             //         markers: true,
        //             //         toggleActions: "restart none reverse none"
        //             //     },
        //             // });
        //         }, main.value); // <- Scope!
        //     }, 1500)
        // });

        // onUnmounted(() => {
        //     cty.revert(); // <- Easy Cleanup!
        // });
        return {
            cardData,
        };
    },
});
</script>


<template>
    <div class="flex flex-col justify-center items-center border-t-2 fontFamilyCinzel overflow-hidden">
        <div class="border-b w-full">
            <div class="flex flex-wrap justify-center scrollFooter">
                <top-footer-card class="" v-for="(data, index) in cardData" :key="index" :data="data" />
            </div>
        </div>
        <div class="flex flex-row justify-center flex-wrap w-full scrollFooter">
            <div class="w-[250px] md:w-[50%] lg:w-[250px] text-center scrollFooter">
                <h1 class="font-semibold my-5">UZUN DÖNEM FİLO KİRALAMA</h1>
                <ul class="text-xs font-medium pl-1 mb-5 footerList">
                    <li>Filo Kiralamanın Avantajları</li>
                    <li>Kiralama - Satın Alma Karşılaştırma</li>
                    <li>Teklif Al</li>
                </ul>
            </div>
            <div class="w-[250px] xs:w-[50%] lg:w-[250px] text-center scrollFooter">
                <h1 class="font-semibold my-5">KURUMSAL</h1>
                <ul class="text-xs font-medium pl-1 mb-5 footerList">
                    <li>Hakkımızda</li>
                    <li>Tarihçe</li>
                    <li>Kültür & Değerlerimiz</li>
                    <li>Basında Biz</li>
                    <li>Başkan'ın Mesajı</li>
                </ul>
            </div>
            <div class="w-[250px] md:w-[50%] lg:w-[250px] text-center scrollFooter">
                <h1 class="font-semibold my-5">İLETİŞİM</h1>
                <ul class="text-xs font-medium pl-1 mb-5 footerList">
                    <li>Bize Mesaj Yazın</li>
                    <li>İletişim Bilgileri</li>
                </ul>
            </div>
            <div class="w-[250px] md:w-[50%] lg:w-[250px] text-center scrollFooter">
                <h1 class="font-semibold my-5">HİZMETLER</h1>
                <ul class="text-xs font-medium pl-1 mb-5 footerList">
                    <li>Yedek Araç Hizmeti</li>
                    <li>Lastik Yönetim Hizmeti</li>
                    <li>Periyodik Bakım Hizmeti</li>
                    <li>HGS Yönetim Hizmeti</li>
                    <li>Hasar Yönetim Hizmeti</li>
                </ul>
            </div>
        </div>
        <div class="flex items-center justify-center py-2 border-t-2 px-4 w-full">
            <div class="md:flex flex-row justify-between w-[1400px]">
                <div class="flex flex-row flex-wrap gap-x-4 py-2 text-xs">
                    <router-link to="/">Gizlilik Politikası</router-link>
                    <router-link to="/">Çerez Politikası</router-link>
                    <router-link to="/">Kişisel Verilerin Kurunması kanunu</router-link>
                    <router-link to="/">Kullanım kuşulları</router-link>
                </div>
                <logo-component logo-src="" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.footerList li {
    margin-bottom: 4px;
}
</style>