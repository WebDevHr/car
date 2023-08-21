<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
    props: {
        logoSrc: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const logoImage = ref(props.logoSrc);
        return {
            logoImage,
        }
    }
});
</script>

<template>
    <div class="flex items-center justify-center w-28 h-20 hover:cursor-pointer lg:mr-20 ml-20 md:ml-0">
        <router-link :to="{ name: 'home' }">
            <img :src="logoImage" alt="Logo" class="w-28">
        </router-link>
    </div>
</template>

