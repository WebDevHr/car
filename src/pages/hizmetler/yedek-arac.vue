<template>
    <div>
        <section class="flex flex-col py-8 border-b bg-gray-100 xs:tracking-wider">
            <div class="myCostumContainer flex justify-between items-center">
                <div class="flex items-center text-start h-10 text-2xl font-bold text-gray-700">
                    {{ $route.name }}
                </div>
                <div class="flex flex-row justify-center items-center">
                    <router-link to="/" class="hover:text-orange-500">
                        <div class="flex flex-row items-center justify-center mr-3">
                            <Icon icon="mdi:home" width="22" height="22" class="mr-2" />Anasayfa
                        </div>
                    </router-link>
                    <Icon icon="iconamoon:arrow-right-2-bold" width="22" height="22" />
                    <span class="ml-3 text-orange-500">{{ $route.name }}</span>
                </div>
            </div>
        </section>
        <section class="myCostumContainer">
            <div class="flex md:flex-row flex-col my-10">
                <div class="w-full md:w-1/2">
                    Aracınızın bakımı ve onarımı yapılırken standartlarınızı korumanız için ikame araç hizmeti sunuyoruz.
                    İkame
                    araç olarak kiraladığınız aracın muadili ya da üst modeli bir araç sunuyoruz.
                </div>
                <div class="flex justify-end items-center w-full md:w-1/2">
                    <div class=" w-[90%] rounded-bl-3xl">
                        <img class="rounded-bl-xl" src="/img/AboutUs/2.jpg" alt="">
                    </div>
                </div>
            </div>

        </section>
        <section>

        </section>
    </div>
</template>

  
<script lang="ts">
import { defineComponent, computed, Ref } from 'vue';
import { Icon } from '@iconify/vue';
import { useRoute, RouteLocationNormalized } from 'vue-router'; // Import the necessary types and functions

export default defineComponent({
    name: "AboutUs",
    components: {
        Icon
    },
    setup() {
        const route: Ref<RouteLocationNormalized | null> = computed(() => {
            return useRoute(); // Access the current route using useRoute() function
        });

        return {
            route
        };
    }
});
</script>
  


<route lang="yaml">
	name : Yedek Araç
</route>
