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
    <div class="logo">
        <router-link :to="{ name: 'home' }">
            <img :src="logoImage" alt="Logo" class="logo-img">
        </router-link>
    </div>
</template>

