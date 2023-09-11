<script lang="ts">
import { ref, defineComponent } from 'vue';
import TopFooterCard from "./TopFooterCard.vue"

export default defineComponent({
    components: {
        TopFooterCard
    },
    setup() {
        const icons = ref([
            { name: 'ion', value: "ion:call-outline", header: 'Bize Ulaşın' },
            { name: 'ion', value: "circum:percent", header: 'Kampanyalar' },
            { name: 'ion', value: "clarity:share-line", header: 'Bizi Takip Edin' },
            { name: 'ion', value: "material-symbols:support-agent", header: 'Bizi Arayın' },
        ])
        return {
            icons
        }
    }
});
</script>


<template>
    <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center border-b">
            <top-footer-card v-for="(icon, index) in icons" :key="index" :icon="icon" />
        </div>
        <div>fsdfsd</div>
    </div>
</template>