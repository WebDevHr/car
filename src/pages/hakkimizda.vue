<template>
	<section class="relative overflow-hidden">
		<div class="absolute inset-0 z-[-1]">
			<div class="h-full w-full parallax">
			</div>
		</div>
		<div class="container mx-auto flex flex-col md:flex-row items-center justify-center py-20 px-4">
			<div class="md:w-1/2 mb-6 md:mb-0">

			</div>
			<div class="md:w-1/2">
				<h2 class="text-3xl font-semibold text-white mb-4">Hakkımızda</h2>
				<p class="text-lg text-white mb-8 text-justify">
					Biz, her yolculuğunuzu en iyi şekilde yaşamanız için tutkulu bir şekilde mükemmel araç kiralama hizmeti
					sunmaktayız. Kalite, güvenilirlik ve müşteri memnuniyetine olan bağlılığımız, her yolcunun en iyi
					deneyimi yaşaması için bizi ileri taşımaktadır.
					Ayrıca, her geçen gün büyüyen bir şirket olarak, yenilikçi yaklaşımımızla sektörde öncü olmaya devam
					ediyoruz.
				</p>
				<p class="text-lg text-white">
					Bizimle birlikte her yolculuk unutulmaz bir deneyime dönüşür. Sizi bekliyoruz!
				</p>
			</div>
		</div>
	</section>
</template>
  
<script lang="ts">
export default {
	// Component logic here
};
</script>

<style scoped> .parallax {
 	background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../../public/img/AboutUs/1.jpg");
 	min-height: 500px;
 	/* Create the parallax scrolling effect */
 	background-attachment: fixed;
 	background-position: center;
 	background-repeat: no-repeat;
 	background-size: cover;
 }
</style>