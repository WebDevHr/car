<template>
    <div class="lg:basis-1/4 sm:basis-1/2 basis-full text-center">
        <div class="flex flex-col justify-center items-center p-5 fontFamilyCinzel">
            <Icon :icon="data.icon" width="50" height="50" color="#ff7700" />
            <h1 class="my-3 text-xl font-semibold">{{ data.header }}</h1>
            <router-link to="#" class="text-sm text-[#ff7700] font-semibold mb-3">{{ data.linkHeader }}</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue';

export default defineComponent({
    components: {
        Icon
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    }

})
</script>