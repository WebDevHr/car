<script lang="ts">
import { defineComponent } from 'vue';
import { gsap } from "gsap"
import { Icon } from '@iconify/vue';
import { doesNotReject } from 'assert';

interface NavLink {
    link: string;
    linkName: string;
    dropDownImg: string;
    subLinks: string[];
}

export default defineComponent({
    components: {
        Icon
    },
    props: {
        links: {
            type: Array as () => NavLink[],
            required: true
        }
    },
    setup(props) {
        const dropdownsToggle = ref<Array<boolean>>([]);
        const x = ref(0)
        const links = computed(() => {
            return props.links
        })
        function topDropDownOpen(index: any, subsNum: number) {
            dropdownsToggle.value[index] = true
            const targetElement = document.querySelector(`.top-nav .top-nav-ul[data-index="${index}"]`);
            // const targetElement2 = document.querySelector(`.sideNav .sublinkUl[data-index="${index}"] .sublinksStagger`);
            const height = (subsNum * 40 + 100).toString() + 'px'
            if (targetElement && subsNum != 0) {
                gsap.to(targetElement, { display: 'flex', height: height, opacity: 1 });
            }
        }

        function topDropDownClose(index: any) {
            dropdownsToggle.value[index] = false
            const targetElement = document.querySelector(`.top-nav .top-nav-ul[data-index="${index}"]`);
            if (targetElement) {
                gsap.to(targetElement, { display: 'none', height: 0, opacity: 0 });
            }
        }
        return {
            links,
            topDropDownOpen,
            topDropDownClose,
            dropdownsToggle
        }
    }
});
</script>

<template>
    <nav class="md:flex md:flex-row hidden h-19">
        <div v-for="(item, index) in links" :key="index" class="custom-style trigger-hover top-nav" :links="links"
            @mouseover="topDropDownOpen(index, item.subLinks.length)" @mouseleave="topDropDownClose(index)">
            <router-link :to="item.link">
                <div class="flex flex-col">
                    <button
<<<<<<< HEAD
                        class=" lg:w-36 md:w-26 w-24 text-gray-400 hover:text-gray-900
                            py-[26px] ease-in-out duration-300 flex justify-center items-center font-semibold top-nav-icon">
=======
                        class=" lg:w-36 md:w-26 w-24 
                             text-gray-500 hover:text-orange-500
                        py-[26px] ease-in-out duration-300 flex justify-center items-center font-semibold top-nav-icon">
>>>>>>> work-place
                        {{ item.linkName }}
                        <span v-if="item.subLinks.length != 0" class="pl-1">

                            <Icon v-if="dropdownsToggle[index]" icon="mingcute:down-fill" :rotate="2" />
                            <Icon v-else icon="mingcute:down-fill" :rotate="0" />
                        </span>
                    </button>

                    <div class="flex flex-row justify-center">
                        <span class="custom-class bg-orange-500"></span>
                    </div>
                </div>
            </router-link>

            <div v-if="item.subLinks.length != 0"
                class="hidden felx-row items-center lg:px-[200px] rounded-b absolute 
                    shadow fontFamilyNunito top-nav-ul z-[1005] bg-white overflow-hidden w-full border-transparent border-t-4 left-0"
                :data-index="index">
                <ul class="fontFamilyCinzel">

                    <li v-for="(sub, i) in item.subLinks" :key="i"
                        class="hover:text-orange-500 text-gray-500 p-1 h-[40px] text-center font-semibold">
                        <router-link :to="sub">
                            {{ sub }}
                        </router-link>
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