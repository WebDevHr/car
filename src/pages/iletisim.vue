<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "Contact",
  setup() {
    return {}
  }
})
</script>

<template>
  <div>
    <div class="flex flex-col py-10 px-20">
      <div class="flex justify-between items-center">
        <div class="text-start h-10 text-2xl font-bold text-gray-700">
          İletişim
        </div>
        <div>
          <router-link to="/" class="hover:text-orange-500">
            Home
          </router-link>
          <span>{{ $route.fullPath.replace('/', ' / ') }}</span>
        </div>
      </div>
    </div>
    <div class="py-10 px-20">
      <form action="submit">
        <label for="name">fsdfsd:</label>
        <input name="name" type="text">
      </form>
    </div>
  </div>
</template>

<route lang="yaml">
  name : contact
</route>