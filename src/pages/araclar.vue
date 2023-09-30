<script lang="ts">
import CarsFilo from "../components/CarsComponents/CarsFilo.vue"
import { Icon } from '@iconify/vue';
export default {
  components: {
    CarsFilo,
    Icon
  },
}
</script>

<template>
  <div class="text-center">
    <div class="flex flex-col py-8 sm:px-20 xs:px-10 px-3  border-b bg-gray-100 xs:tracking-wider">
      <div class="myCostumContainer">
        <div class="flex justify-between items-center">
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
    </div>
    <cars-filo />
  </div>
</template>


<route lang="yaml">
  name : Araçlar
</route>