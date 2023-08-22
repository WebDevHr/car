<template>
	<div id="app">
		<header-component />
		<router-view :key="$route.fullPath" />
		<footer-component />
	</div>
	<div>
		<p>muaasfnas</p>
	</div>
</template>
  
<script lang="ts">
import HeaderComponent from "../src/components/GlobalComponents/HeaderComponent.vue"
import FooterComponent from "../src/components/GlobalComponents/FooterComponent.vue"
export default {
	components: {
		HeaderComponent,
		FooterComponent
	},
}
</script>
  
<style>
.fontFamilyCinzel {
	font-family: 'Cinzel', serif;
}

.fontFamilyNunito {
	font-family: 'Nunito', sans-serif;
}
</style>
  
  
