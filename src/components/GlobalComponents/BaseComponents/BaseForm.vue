<template>
    <div class=" my-10 w-full">
        <form class="bg-white p-8 shadow-md rounded-lg border-t" @submit.prevent="submitForm">
            <slot></slot> <!-- Slot for form fields -->

            <div>
                <button type="submit" class="bg-orange-500 text-white font-normal py-2 px-4 rounded-xl">
                    Formu Gönder
                </button>
            </div>
        </form>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({});

const submitForm = () => {
    // Handle form submission logic here
    console.log(formData.value);
};
</script>
  
<style scoped>
/* Add Tailwind CSS classes as needed */
</style>
  