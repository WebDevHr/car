<template>
    <div class="header-component fontFamilyCinzel">
        <!-- Top Nav -->
        <logo-component :logoSrc="logoImage" />
        <top-nav-component :links="links" />

        <!-- Side Nav -->
        <humburger-component :toggleSideNav="toggleSideNav" :isActive="isActive" class="hamburger" />
        <side-nav-component :links="links" :sideNavMouseOver="sideNavMouseOver" :sideNavMouseLeave="sideNavMouseLeave" />
    </div>
</template>


<script lang="ts">
import { gsap } from "gsap"
import { ref, defineComponent } from 'vue';
import LogoComponent from "./LogoComponent.vue"
import TopNavComponent from "./TopNavComponent.vue"
import SideNavComponent from "./SideNavComponent.vue"
import HumburgerComponent from "./HumburgerComponent.vue"



interface NavLink {
    link: string;
    linkName: string;
    dropDownImg: string;
    subLinks: string[];
}

export default defineComponent({
    components: {
        LogoComponent,
        TopNavComponent,
        HumburgerComponent,
        SideNavComponent
    },
    setup() {
        const logoImage = '/img/carLogo.png'
        const isActive = ref(false)
        const links = ref<NavLink[]>([
            {
                link: '/',
                linkName: 'Anasayfa',
                dropDownImg: '/img/car-sport-outline.svg',
                subLinks: []
            },
            {
                link: '/hakkimizda',
                linkName: 'Hakkımızda',
                dropDownImg: '/img/ddImg.png',
                subLinks: []
            },
            {
                link: '/hizmetler',
                linkName: 'Hizmetler',
                dropDownImg: '/img/car-sport-outline.svg',
                subLinks: ['Genel haberler', 'Araclarin durumu', 'Araclarin durumu', 'Araclarin durumu']
            },
            {
                link: '/araclar',
                linkName: 'Araçlar',
                dropDownImg: '',
                subLinks: []
            },
            {
                link: '/iletisim',
                linkName: 'İletişim',
                dropDownImg: '',
                subLinks: []
            }
        ])

        function toggleSideNav(data: boolean) {
            isActive.value = data;
            if (data === true) {
                gsap.to(".sideNav", { width: '50%', display: 'block' })
            } else {
                gsap.to(".sideNav", { width: '0', display: 'none' })
            }
        }
        function sideNavMouseOver(index: any, haveSubs: boolean) {
            const targetElement = document.querySelector(`.sideNav .sublinkUl[data-index="${index}"]`);
            // const targetElement2 = document.querySelector(`.sideNav .sublinkUl[data-index="${index}"] .sublinksStagger`);
            if (targetElement && haveSubs) {
                gsap.to(targetElement, { display: 'flex', height: '150px' });
            }
        }

        function sideNavMouseLeave(index: any) {
            const targetElement = document.querySelector(`.sideNav .sublinkUl[data-index="${index}"]`);
            if (targetElement) {
                gsap.to(targetElement, { display: 'none', height: '0' });
            }
        }

        const closeSideNav = () => {
            isActive.value = false;
            gsap.to(".sideNav", { width: '0', display: 'none' });
        };

        // Event listener to close side nav when clicking outside
        const closeSideNavOnClickOutside = (event: any) => {
            if (isActive.value == true && event.target.closest('.sideNav') === null && !event.target.closest('.hamburger')) {
                closeSideNav();
            }
        };

        const handleWindowResize = () => {
            if (window.innerWidth > 768 && isActive.value) {
                closeSideNav();
            }
        };

        onMounted(() => {
            document.addEventListener('click', closeSideNavOnClickOutside);
            window.addEventListener('resize', handleWindowResize);
        });

        onUnmounted(() => {
            document.removeEventListener('click', closeSideNavOnClickOutside);
            window.removeEventListener('resize', handleWindowResize);
        });

        return {
            links,
            isActive,
            logoImage,
            toggleSideNav,
            sideNavMouseOver,
            sideNavMouseLeave,
        }
    }
});
</script>


