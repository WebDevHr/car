<script lang="ts">
import { defineComponent } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

export default defineComponent({
  name: 'home',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const img = ref<Array<string>>([
      '/img/CarouselImages/3.jpg',
      '/img/CarouselImages/2.jpg',
      '/img/CarouselImages/1.jpg',
      '/img/CarouselImages/4.jpg',
      '/img/CarouselImages/5.jpg',
      '/img/CarouselImages/6.jpg',
    ])
    return {
      img,
    }
  }
})
</script>

<template>
  <div class="bg-gray-50 w-full">
    <main class="md:pt-5 md:w-4/5 mx-auto">
      <Carousel>
        <Slide v-for="slide in img" :key="slide">
          <div class="carousel__item">
            <img :src="slide" alt="" class="inset-0 object-cover">
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
      <div>
        <router-link to="/Servislerimiz">go to services</router-link>
      </div>
    </main>
    <footer class="py-6 text-sm text-center text-gray-700">

    </footer>
  </div>
</template>



<style>
.carousel__item {
  width: 100%;
  background-color: white;
  color: black;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
}
</style>

<route lang="yaml">
  name: home
</route>
