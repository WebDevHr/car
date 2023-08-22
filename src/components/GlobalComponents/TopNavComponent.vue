<script lang="ts">
import { defineComponent } from 'vue';
import { gsap } from "gsap"

interface NavLink {
    link: string;
    linkName: string;
    dropDownImg: string;
    subLinks: string[];
}

export default defineComponent({
    props: {
        links: {
            type: Array as () => NavLink[],
            required: true
        }
    },
    setup(props) {
        const links = computed(() => {
            return props.links
        })
        function topDropDownOpen(index: any, haveSubs: boolean) {
            const targetElement = document.querySelector(`.top-nav .top-nav-ul[data-index="${index}"]`);
            // const targetElement2 = document.querySelector(`.sideNav .sublinkUl[data-index="${index}"] .sublinksStagger`);
            if (targetElement && haveSubs) {
                gsap.to(targetElement, { display: 'flex', height: '160px' });
            }
        }

        function topDropDownClose(index: any) {
            const targetElement = document.querySelector(`.top-nav .top-nav-ul[data-index="${index}"]`);
            if (targetElement) {
                gsap.to(targetElement, { display: 'none', height: 0 });
            }
        }
        return {
            links,
            topDropDownOpen,
            topDropDownClose
        }
    }
});
</script>

<template>
    <nav class="md:flex md:flex-row hidden h-19">
        <div v-for="(item, index) in links" :key="index" class="custom-style trigger-hover relative top-nav" :links="links"
            @mouseover="topDropDownOpen(index, item.subLinks.length != 0)" @mouseleave="topDropDownClose(index)">
            <router-link :to="item.link">
                <div class="flex flex-col">
                    <button class="text-base hover:text-lg lg:text-lg lg:hover:text-xl lg:w-36 md:w-26 w-24 
                             text-gray-400 hover:text-gray-900
                        py-[26px] ease-in-out duration-300 flex justify-center items-center">
                        {{ item.linkName }}
                    </button>
                    <div class="flex flex-row justify-center">
                        <span class="custom-class bg-black"></span>
                    </div>
                </div>
            </router-link>

            <div v-if="item.subLinks.length != 0" class="hidden felx-row items-center justify-center rounded-b absolute 
                    shadow fontFamilyNunito top-nav-ul z-[1005] bg-white overflow-hidden" :data-index="index">
                <ul class="fontFamilyCinzel">
                    <li v-for="(sub, i) in item.subLinks" :key="i" class="hover:text-gray-900 text-gray-400 p-1">
                        <a href="">{{ sub }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.custom-class {
    width: 0px;
    height: 2px;
    transition: all 0.3s ease-in-out;
}

.trigger-hover:hover .custom-class {
    width: 100%;
}
</style>