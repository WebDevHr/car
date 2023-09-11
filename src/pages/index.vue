<script lang="ts">
import { defineComponent } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import WhyFiloComponent from "@/components/FirstPageComponents/WhyFiloComponent.vue"
import NedenBiz from "@/components/FirstPageComponents/NedenBizComponent.vue"

export default defineComponent({
  name: 'home',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    WhyFiloComponent,
    NedenBiz
  },
  setup() {
    const isLoading = ref(true)
    const carouselData = ref([
      {
        img: '/img/CarouselImages/1.jpg',
        title: 'Uzun Dönem Filo Kiralama',
        description: 'Bizim ile tek düşünmeniz gereken şey, keyif ile araba sürmek. Başka birşey düsünmeyin, gerisi bizde.',
        buttonTitle: 'Teklif Al',
        buttonRoute: "/teklif-al"
      },
      {
        img: '/img/CarouselImages/2.jpg',
        title: '',
        description: '',
        buttonTitle: '',
        buttonRoute: ""
      },
      {
        img: '/img/CarouselImages/3.jpg',
        title: '',
        description: '',
        buttonTitle: '',
        buttonRoute: ""
      },
      {
        img: '/img/CarouselImages/4.jpg',
        title: '',
        description: '',
        buttonTitle: '',
        buttonRoute: ""
      },
      {
        img: '/img/CarouselImages/5.jpg',
        title: '',
        description: '',
        buttonTitle: '',
        buttonRoute: ""
      },
      {
        img: '/img/CarouselImages/7.jpg',
        title: '',
        description: '',
        buttonTitle: '',
        buttonRoute: ""
      }
    ])

    const onImageLoad = () => {
      isLoading.value = false;
    }

    onMounted(() => {
      // Simulate image loading delay
      setTimeout(() => {
        isLoading.value = false;
      }, 1000); // Adjust the delay according to your needs
    });

    return {
      carouselData,
      isLoading,
      onImageLoad
    }
  }
})
</script>

<template>
  {{ isLoading }}
  <div v-if="isLoading">
    <div class="w-full h-[800px] bg-red-500">
      <img src="" alt="">
    </div>
  </div>
  <div v-else class="bg-gray-50 ">
    <main>
      <Carousel :wrap-around="true" :transition="800" :autoplay="4000" :pause-autoplay-on-hover="true">
        <Slide v-for="(slide, index) in carouselData" :key="index" class="w-full padding-0">
          <div class="carousel__item relative object-scale-down w-full max-h-[600px]">
            <img v-if="!isLoading" :src="slide.img" alt="" class="inset-0" @load="onImageLoad">
            <div
              class="absolute z-[1009] max-w-[600px] top-0 left-0 md:ml-[100px] md:mt-[100px] sm:mx-[20px] sm:mt-[50px] mx-[20px] mt-[20px] text-left">
              <h1 class="text-white text-[24px] sm:text-[42px] md:text-[48px] font-bold w-[300px] leading-10">{{
                slide.title }}</h1>
              <p class="text-white md:mt-10 mt-2 leading-5 md:text-xl sm:text-base text-sm">{{ slide.description }}</p>
              <div v-if="slide.buttonTitle !== ''" class="md:mt-10 sm:mt-5  text-center sm:text-start">
                <router-link :to="{ path: slide.buttonRoute }">
                  <button class="px-5 py-1 sm:py-4 rounded bg-green-600 hover:bg-green-700 text-white sm:min-w-[150px] 
                    min-w-[100px] tracking-wide text-sm">
                    {{ slide.buttonTitle }}
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>
      <WhyFiloComponent />
      <neden-biz />
    </main>
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

.carousel__item img {
  width: auto !important;
  height: auto !important;
}


.carousel__slide {
  max-height: 600px;
}

.carousel__pagination {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}

.carousel__pagination-item .carousel__pagination-button::after {
  height: 18px;
  width: 18px;
  background-color: white;
  border-radius: 20px;
  border: 4px solid black;
}
</style>

<route lang="yaml">
  name: home
</route>
