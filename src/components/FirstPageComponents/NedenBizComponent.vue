<template>
    <div class="w-full md:bg-[url('/img/nedenBiz.jpg')] md:min-h-[500px] bg-no-repeat bg-cover bg-fixed mb-10 ">
        <div class="trapezoid bg-gray-200 md:bg-white/80 skew-x-0 md:-skew-x-12 md:w-[800px] overflow-hidden ml-[-40px]">
            <div
                class="trapezoid-content skew-x-0 md:skew-x-12 my-10 ml-[50px] md:ml-[100px] flex flex-col justify-center md:justify-start items-center text-center md:text-start">

                <div class="scrollNedenBiz" ref="main">
                    <h1 class="text-[36px] md:text-[42px] fontFamilyNunito font-bold">Neden Trust & Go ?
                    </h1>
                    <p class="text-justify text-gray-500 max-w-[400px] md:max-w-[600px] mt-5">Türkiye'nin
                        neresinde
                        olursanız
                        olun, şirketinizin ihtiyacını karşılayacak araçları, 30 senedir sektör
                        lideri olarak hizmet veren Trust & Go'den kiralayın.
                        Siz işinize bakın, gerisini biz hallederiz! İşimiz Ne?</p>
                    <button
                        class="min-w-[150px] shadow px-5 py-3 rounded bg-orange-500 hover:bg-orange-600 text-white mt-5 text-md tracking-wide">Bizi
                        Yakindan Taniyin.</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default defineComponent({
    setup() {
        // gsap.registerPlugin(ScrollTrigger);
        // const main = ref();
        // let ctx: gsap.Context;

        // onMounted(() => {
        //     ScrollTrigger.refresh()
        //     setTimeout(() => {
        //         ctx = gsap.context(() => {
        //             gsap.from('.scrollNedenBiz', {
        //                 x: -100,
        //                 opacity: 0,
        //                 duration: 1,
        //                 scrollTrigger: {
        //                     trigger: ".scrollNedenBiz",
        //                     start: "10% 70%",
        //                     end: "10% 70%",
        //                     toggleActions: "restart none reverse none"
        //                 },
        //             });
        //         }, main.value); // <- Scope!
        //     }, 600)
        // });

        // onUnmounted(() => {
        //     ctx.revert(); // <- Easy Cleanup!
        // });
        return {}
    }


})
</script>

