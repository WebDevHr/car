<script lang="ts">
import { defineComponent } from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineComponent({
    setup() {
        gsap.registerPlugin(ScrollTrigger);
        const main = ref();
        let ctz: gsap.Context;

        onMounted(() => {
            ScrollTrigger.refresh()
            setTimeout(() => {
                ctz = gsap.context(() => {
                    gsap.from('.scrollWhyFilo', {
                        x: 100,
                        opacity: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: ".scrollWhyFilo",
                            start: "top 70%",
                            end: "top 70%",
                            toggleActions: "restart none reverse none"
                        },
                    });
                }, main.value); // <- Scope!
            }, 500)
        });

        onUnmounted(() => {
            ctz.revert(); // <- Easy Cleanup!
        });
        return {}
    },
})

</script>


<template>
    <div class="flex md:flex-row flex-col justify-center items-center my-20 w-full">
        <div class="md:w-1/2 w-full ">
            <div
                class="flex justify-center items-end bg-[url('/img/neden.jpg')] min-h-[400px] bg-no-repeat bg-cover bg-center bg-fixed md:bg-local">
                <img class="h-[250px] mb-10" src="/img/FiloImages/3.png" alt="fasdfs">
            </div>
        </div>
        <div class="md:w-1/2 w-full flex flex-col md:items-start items-center justify-center 
            h-[400px] px-3 sm:px-10 lg:px-20 text-center sm:text-start bg-gray-200">
            <div class="scrollWhyFilo">
                <h1 class="text-[36px] md:text-[42px] fontFamilyNunito font-bold ">Neden Filo Kiralama?
                </h1>
                <p class="text-justify text-gray-500 max-w-[400px] mt-5 ">
                    Şirket sermayenizi bağlamadan
                    Satın alım finansmanı ile uğraşmadan
                    Aracınızın ikinci el satışı ile ilgilenmeden. <br /><br />

                    İster tek bir araca isterseniz onlarcasına ihtiyacınız olsun, filo kiralama hizmeti her zaman en
                    avantajlı
                    seçenek.
                </p>
                <router-link :to="{ name: 'neden-filo' }">
                    <button
                        class="min-w-[150px] shadow px-5 py-3 rounded bg-orange-500 hover:bg-orange-600 text-white mt-5 text-md tracking-wide">
                        Filo Kiralamanın avantajları
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>