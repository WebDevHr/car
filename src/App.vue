<template>
	<div id="app">
		<header-component />
		<router-view>
			<template v-slot="{ Component }">
				<transition appear @before-enter="beforeEnter" @enter="enter" @leave="beforeLeave">
					<component :is="Component" />
				</transition>
			</template>
		</router-view>
		<footer-component />
	</div>
</template>
  
<script setup lang="ts">
import { gsap } from "gsap";

const beforeEnter = (el: any) => {
	el.style.opacity = 1;
};

const enter = (el: any, done: any) => {
	gsap.from(el, {
		x: -50,
		opacity: 0,
		duration: 1.5,
		onComplete: done,
	});
};

const beforeLeave = (el: any, done: any) => {
	gsap.to(el, {
		x: -50,
		opacity: 0,
		duration: 0.75,
		onComplete: done,
	});
};

</script>
  
<style>
.myCostumContainer {
	@apply container mx-auto 2xl:max-w-[1280] px-2;
}

p {
	@apply text-justify;
}

h1 {
	@apply text-gray-600 font-bold text-xl
}

a:hover {
	@apply text-orange-500;
}

.fontFamilyCinzel {
	font-family: 'Cinzel', serif;
}

.fontFamilyNunito {
	font-family: 'Nunito', sans-serif;
}
</style>
  
  
