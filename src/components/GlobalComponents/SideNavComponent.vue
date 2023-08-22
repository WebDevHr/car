<script lang="ts">
import { ref, defineComponent } from 'vue';

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
        },
        sideNavMouseOver: {
            type: Function,
            required: true
        },
        sideNavMouseLeave: {
            type: Function,
            required: true
        },
    },
    setup(props) {
        return {
        }
    }
});
</script>

<template>
    <nav class="side-nav-component sideNav">
        <div class="side-nav-div">
            <div v-for="(item, index) in links" :key="index" @mouseover="sideNavMouseOver(index, item.subLinks.length != 0)"
                @mouseleave="sideNavMouseLeave(index)">
                <router-link :to="item.link">
                    <div class="trigger-button-div">
                        <button class="trigger-button">
                            {{ item.linkName }}
                        </button>
                    </div>
                </router-link>

                <ul class="hidden h-0 flex-col justify-center items-center text-sm sublinkUl overflow-hidden"
                    :class="{ 'pb-2': item.subLinks.length != 0 }" :data-index="index">
                    <li v-for="(sub, i) in item.subLinks" :key="i" class=" hover:text-white text-gray-400 sublinksStagger"
                        :class="{ 'py-1': item.subLinks.length != 0 }">
                        <a href="">{{ sub }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

