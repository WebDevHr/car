<template>
    <div class="w-full md:bg-[url('/img/nedenBiz.jpg')] md:min-h-[500px] bg-no-repeat bg-cover bg-fixed mb-10 ">
        <div
            class="trapezoid bg-gray-200 md:bg-white/80 skew-x-0 md:-skew-x-12 md:w-[800px] overflow-hidden ml-[-40px] scr-trig">
            <div
                class="trapezoid-content skew-x-0 md:skew-x-12 my-10 ml-[50px] md:ml-[100px] flex flex-col justify-center md:justify-start items-center text-center md:text-start scr-ani">
                <h1 class="text-[36px] md:text-[42px] fontFamilyNunito font-bold mt-10">Neden Trust & Go ? </h1>
                <p class="text-justify text-gray-500 max-w-[400px] md:max-w-[600px] mt-5">Türkiye'nin neresinde olursanız
                    olun, şirketinizin ihtiyacını karşılayacak araçları, 30 senedir sektör
                    lideri olarak hizmet veren Intercity'den kiralayın.
                    Siz işinize bakın, gerisini biz hallederiz! İşimiz Ne?</p>
                <button
                    class="min-w-[150px] shadow px-5 py-3 rounded bg-green-600 hover:bg-green-700 text-white mt-5 text-md tracking-wide">Bizi
                    Yakindan Taniyin.</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default defineComponent({
    setup() {
        onMounted(() => {
            setTimeout(() => {
                gsap.from(".scr-ani", {
                    scrollTrigger: {
                        trigger: ".scr-trig",
                        start: "20% 70%",
                        end: "30% bottom",
                        toggleActions: "restart none reverse none"
                    },
                    x: -100,
                    opacity: 0,
                    duration: 1
                })
            }, 1000);

        })
        return {}
    }

})
</script>

