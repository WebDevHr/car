<template>
    <div class="w-full bg-[url('/img/nedenBiz.jpg')] min-h-[500px] bg-no-repeat bg-cover bg-fixed mb-10">
        <div class="trapezoid">
            <div class="trapezoid-content">
                <h1 class="text-[36px] md:text-[42px] fontFamilyNunito font-bold ">Neden Trust & Go ? </h1>
                <p>Türkiye'nin neresinde olursanız olun, şirketinizin ihtiyacını karşılayacak araçları, 30 senedir sektör
                    lideri olarak hizmet veren Intercity'den kiralayın.

                    Siz işinize bakın, gerisini biz hallederiz! İşimiz Ne?</p>
                <button
                    class="min-w-[150px] shadow px-5 py-3 rounded bg-green-600 hover:bg-green-700 text-white mt-5 text-md tracking-wide">Bizi
                    Yakindan Taniyin.</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "Trapezoid",
};
</script>

<style scoped>
.trapezoid {
    width: 800px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.8);
    transform: skewX(-14.5deg);
    margin-left: -40px;
    overflow: hidden;
    /* Hide content outside the skewed area */
}

.trapezoid-content {
    transform: skewX(14.5deg);
    margin-left: 50px;
    /* Counter-skew the content */
}
</style>
