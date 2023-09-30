<template>
    <div>
        <section>
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
        </section>
        <section class="my-10">
            <div class="myCostumContainer">
                <p>
                    Intercity’nin İstanbul Merkez olmak üzere, İzmir, Ankara, Adana, Bursa, Samsun ve Antalya şehirlerinde
                    ofisleri
                    bulunmaktadır. 500 kişiyi aşan profesyonel kadrosu ile Intercity %25 pazar payını ve sektör liderliğini
                    muhafaza
                    etmektedir. Intercity, filonuzun belirlenmesinde analiz yaparak ihtiyacınıza uygun çözümlerle sahada
                    kullanılacak
                    araçlardan, üst düzey yönetici araçlarına kadar marka ve modelden bağımsız geniş bir ürün yelpazesi
                    sunmakta
                    ve
                    her
                    sınıftan binek ve ticari araçlar kiralamaktadır.
                    <br>
                    <br>
                    Kaliteli hizmet, müşteri memnuniyeti ve dürüst çalışma ilkelerini benimseyerek 1992 yılında kurulan
                    Intercity,
                    İstanbul, İzmir ve Ankara’da kendi servisleri ve yurt çapındaki anlaşmalı servis noktaları ile
                    müşterilerine
                    garantili ve 7/24 kesintisiz hizmet vermektedir.
                </p>
            </div>

        </section>
        <section class="myCostumContainer">
            <div class="w-full px-2 py-16 sm:px-0 my-10">
                <TabGroup>
                    <TabList class="flex space-x-1 rounded-xl bg-white p-1">
                        <Tab v-for="(category, index) in Object.keys(categories)" as="template" :key="index"
                            v-slot="{ selected }">
                            <button :class="[
                                'w-full rounded-lg py-4 text-sm font-medium leading-5 text-gray-600',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-500 focus:outline-none',
                                selected
                                    ? 'bg-gray-100 shadow text-orange-500'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-orange-500',
                            ]">
                                <div class="flex flex-col justify-center items-center">
                                    <span
                                        class="flex items-center justify-center bg-orange-500 w-20 h-20 rounded-full text-white mb-3">
                                        <Icon :icon="icons[index]" width="30" height="30" />
                                    </span>
                                    {{ category }}
                                </div>
                            </button>
                        </Tab>
                    </TabList>

                    <TabPanels class="mt-2">
                        <TabPanel v-for="(posts, idx) in Object.values(categories)" :key="idx" :class="[
                            'rounded-xl bg-gray-100 p-3',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                        ]">
                            <ul>
                                <li v-for="post in posts" :key="post.id" class="relative rounded-md p-3 ">
                                    <h3 class="text-sm font-medium text-gray-600 text-center leading-5">
                                        {{ post.description }}
                                    </h3>

                                    <!-- <a href="" :class="[
                                        'absolute inset-0 rounded-md',
                                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                                    ]" /> -->
                                </li>
                            </ul>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </section>
    </div>
</template>

<route lang="yaml">
    name : Hizmetlerimiz
</route>
  
<script lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

export default defineComponent({
    components: {
        Icon, TabGroup, TabList, Tab, TabPanels, TabPanel
    },
    setup() {
        const icons = ref(['mdi:account-help', 'solar:hand-money-linear', 'mdi:account-payment', 'carbon:security'])
        const categories = ref({
            Danışmanlık: [
                {
                    id: 1,
                    description: 'Intercity, işinde uzman profesyonel ekibi ile uygun çözümleri geliştirmek için talep ve ihtiyaçlarınızdan yola çıkarak şirketinizi analiz eder ve size en uygun operasyonel filoyu oluşturmanız için müşteri memnuniyeti ilkesini benimseyerek danışmanlık hizmeti sunar.',
                },
            ],
            Satınalma: [
                {
                    id: 1,
                    description: 'Intercity, geniş araç yelpazesi ile tüm marka ve model araçlara ulaşım imkânı sağlar. Araç teklifleri, araç özellik karşılaştırmaları ve görüşmeler ile zaman kaybetmeden kiralamanın kolaylıklarından faydalanırsınız.',
                },

            ],
            'HGS/OGS': [
                {
                    id: 1,
                    description: 'HGS ve OGS cihaz temini, bakiye yüklenmesi ve arıza/yenileme işlemlerini dilersiniz Intercity sizin yerinize yapabilir.',
                },

            ],
            Sigorta: [
                {
                    id: 1,
                    description: 'Intercity’den kiraladığınız tüm araçlar kaskolu olup, zorunlu trafik sigortaları takip edilerek düzenli olarak yenilenir. Kiralayacağınız araçlarda kasko ve zorunlu trafik poliçelerine ek olarak, Ferdi Kaza ve İhtiyari Mali Mesuliyet Sigortalarından da faydalanılmaktadır.',
                },
            ],
        })
        return {
            categories,
            icons
        }

    }
})

</script>
  