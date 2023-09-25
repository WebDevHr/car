<script lang="ts">
import { defineComponent } from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default defineComponent({
    setup() {
        onMounted(() => {
            setTimeout(() => {
                gsap.from(".scroll-ani", {
                    scrollTrigger: {
                        trigger: ".scroll-trig",
                        start: "20% 70%",
                        end: "30% bottom",
                        toggleActions: "restart none reverse none"
                    },
                    x: 100,
                    opacity: 0,
                    duration: 1
                })
            }, 1000);

        })
        return {}
    }

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
            h-[400px] px-3 sm:px-10 lg:px-20 text-center sm:text-start bg-gray-200 scroll-trig">
            <h1 class="text-[36px] md:text-[42px] fontFamilyNunito font-bold scroll-ani">Neden Filo Kiralama?
            </h1>
            <p class="text-justify text-gray-500 max-w-[400px] mt-5 scroll-ani">
                Şirket sermayenizi bağlamadan
                Satın alım finansmanı ile uğraşmadan
                Aracınızın ikinci el satışı ile ilgilenmeden. <br /><br />

                İster tek bir araca isterseniz onlarcasına ihtiyacınız olsun, filo kiralama hizmeti her zaman en avantajlı
                seçenek.
            </p>
            <router-link :to="{ name: 'neden-filo' }">
                <button
                    class="min-w-[150px] shadow px-5 py-3 rounded bg-green-600 hover:bg-green-700 text-white mt-5 text-md tracking-wide scroll-ani">
                    Filo Kiralamanın avantajları
                </button>
            </router-link>
        </div>
    </div>
</template>