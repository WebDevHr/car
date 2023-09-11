<template>
    <div class="flex flex-col justify-center items-center lg:w-[250px] md:w-[200px] sm:w-[150px]  p-5">
        <Icon :icon="icon.value" width="70" height="70" color="#ff7700" />
        <h1 class="my-3 text-xl font-semibold">Bize ulaşın</h1>
        <router-link to="#" class="text-sm text-[#ff7700] font-semibold">İletişime Geç</router-link>
    </div>
</template>

<script lang="ts">
import { Icon } from '@iconify/vue';

export default defineComponent({
    components: {
        Icon
    },
    props: {
        icon: {
            type: Object,
            required: true
        }
    }

})
</script>