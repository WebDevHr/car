<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
    props: {
        isActive: {
            type: Boolean,
            required: true
        },
        toggleSideNav: {
            type: Function, // Declare the type as Function
            required: true
        }
    },
    setup(props) {
        const isActive = ref(props.isActive);

        watch(() => props.isActive, (newValue) => {
            isActive.value = newValue;
        });

        function triggerd() {
            props.toggleSideNav(isActive.value); // Call the passed function
        }

        return {
            isActive,
            triggerd
        }
    }
});
</script>

<template>
    <div class="hamburger-component hamburger" :class="{ 'fixed top-0 right-10': isActive }" @click="triggerd">
        <button class="hamburger-button" @click="isActive = !isActive">
            <span class="top-span"
                :class="{ 'rotate-45 translate-y-2': isActive, 'rotate-0': !isActive, 'bg-white': isActive, 'bg-black': !isActive }"></span>
            <span class="mid-span" :class="{ 'opacity-0': isActive, 'bg-black': !isActive }"></span>
            <span class="bot-span"
                :class="{ '-rotate-45 -translate-y-2': isActive, 'rotate-0': !isActive, 'bg-white': isActive, 'bg-black': !isActive }"></span>

        </button>
    </div>
</template>
