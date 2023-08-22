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
    <div class="hamburger-component" :class="{ 'fixed top-0 right-20': isActive, 'mr-20': !isActive }" @click="triggerd">
        <button class="hamburger-button" @click="isActive = !isActive">
            <span class="top-span bg-black"
                :class="{ 'rotate-45 translate-y-2 bg-white': isActive, 'rotate-0': !isActive }"></span>
            <span class="mid-span bg-black" :class="{ 'opacity-0': isActive }"></span>
            <span class="bot-span bg-black"
                :class="{ '-rotate-45 -translate-y-2 bg-white': isActive, 'rotate-0': !isActive }"></span>
        </button>
    </div>
</template>
