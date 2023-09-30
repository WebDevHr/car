<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from '@iconify/vue';
import BaseForm from '@/components/GlobalComponents/BaseComponents/BaseForm.vue';
import GoogleMap from '@/components/GoogleMap.vue'; // Adjust the import path

export default defineComponent({
  name: "Contact",
  components: {
    GoogleMap,
    BaseForm,
    Icon
  },
  setup() {
    const formData = ref({
      name: '',
      email: '',
      phone_number: '',
      message: '',
      // Add more fields as needed
    })

    let context: gsap.Context

    onMounted(() => {
      context = gsap.context(() => { })
      context.add(() => {
        gsap.from('.scrollContactForm', {
          y: 100,
          duration: 1,
          stagger: 0.2,
          delay: 0.5,
        })
      })
    });
    onUnmounted(() => {
      context.revert()
    })


    return {
      formData,
    }
  }
})
</script>

<template>
  <div>
    <div class="flex flex-col py-8 border-b bg-gray-100 xs:tracking-wider">
      <div class="myCostumContainer flex flex-col xs:flex-row justify-between items-center">
        <div class="flex items-center text-start h-10 text-2xl font-bold text-gray-700">
          {{ $route.name }}
        </div>
        <div class="flex flex-row justify-center items-center">
          <router-link to="/" class="hover:text-orange-500">
            <div class="flex flex-row items-center justify-center mr-3">
              <Icon icon="mdi:home" width="22" height="22" class="mr-2" />Anasayfa
            </div>
          </router-link>
          <Icon icon="iconamoon:arrow-right-2-bold" width="22" height="22" />
          <span class="ml-3 text-orange-500">{{ $route.name }}</span>
        </div>
      </div>
    </div>
    <div class="myCostumContainer flex flex-col">
      <div class="flex justify-center">
        <div class="md:w-[727px] xs:w-[465px] w-full p-8 mt-10 xs:shadow-md xs:rounded-lg xs:border-t">
          <h1 class="text-2xl font-bold mb-3">Formu Doldurun
            Hemen Sizi Arayalım</h1>
          <p>Firmamız sizinle <b>iletişime geçerek</b> aracanızı en hızlı şekilde teslim almanızı sağlayacaktır.</p>
        </div>
      </div>
      <base-form>
        <!-- Slot content for form fields -->
        <div
          class="mb-4 border border-orange-500 rounded-full flex flex-row justify-center items-center scrollContactForm">
          <label for="name" class="block font-bold md:ml-8 ml-5 mr-2 text-orange-500">
            <Icon icon="mdi:user" width="22" height="22" />
          </label>
          <input type="text" id="name" v-model="formData.name"
            class="p-2 border-none rounded-full focus:border-none no-shadow font-semibold md:w-[600px] xs:w-[350px]"
            placeholder="Adınız" />
        </div>
        <div
          class="mb-4 border border-orange-500 rounded-full flex flex-row justify-center items-center scrollContactForm">
          <label for="email" class="block font-bold md:ml-8 ml-5 mr-2 text-orange-500">
            <Icon icon="mdi:email" width="22" height="22" />
          </label>
          <input type="email" id="email" v-model="formData.email"
            class="p-2 border-none rounded-full focus:border-none no-shadow font-semibold md:w-[600px] xs:w-[350px]"
            placeholder="E-postanız" />
        </div>
        <div
          class="mb-4 border border-orange-500 rounded-full flex flex-row justify-center items-center scrollContactForm">
          <label for="phone_number" class="block font-bold md:ml-8 ml-5 mr-2 text-orange-500">
            <Icon icon="mdi:phone" width="22" height="22" />
          </label>
          <input type="tel" id="phone_number" v-model="formData.phone_number"
            class="p-2 border-none rounded-full focus:border-none no-shadow font-semibold md:w-[600px] xs:w-[350px]"
            placeholder="05** *** ** **" />
        </div>
        <div class="mb-4 border border-orange-500 rounded-xl flex flex-row justify-center items-center scrollContactForm">
          <label for="message" class="block font-bold md:ml-8 ml-5 mr-2 text-orange-500 self-start mt-3">
            <Icon icon="tabler:message" width="22" height="22" />
          </label>
          <textarea type="text" id="message" v-model="formData.message"
            class="p-2 border-none rounded-xl focus:border-none no-shadow font-semibold md:w-[600px] xs:w-[350px] min-h-[50px]"
            placeholder="Mesajınız"></textarea>
        </div>
        <!-- Add more form fields using slots as needed -->
      </base-form>
    </div>
  </div>
</template>

<route lang="yaml">
  name : İletişim
</route>


<style scoped>
.no-shadow:focus {
  box-shadow: none;
}

.orange-color::placeholder {
  color: rgb(229, 115, 22)
}
</style>