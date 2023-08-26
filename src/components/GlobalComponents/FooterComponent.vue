<!-- eslint-disable vue/first-attribute-linebreak -->
<template>
    <div class="footer">
        <div class="bg-gray-800">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 text-gray-400">
                    <div class="col-span-1 mt-6 md:mt-0">
                        <h4 class="text-xl font-semibold">Information</h4>
                        <ul class="mt-4 space-y-2">
                            <li><i class="fa fa-map-marker" aria-hidden="true"></i> Lorem Ipsum 132 xyz Lorem Ipsum</li>
                            <li><i class="fa fa-envelope"></i> <a href="mailto:#">info@test.com</a></li>
                            <li><i class="fa fa-mobile" aria-hidden="true"></i> <a href="tel:12 34 56 78 90">12 34 56 78
                                    90</a></li>
                        </ul>
                    </div>
                    <div class="col-span-1 mt-6 md:mt-0">

                    </div>

                    <div class="col-span-1 mt-6 md:mt-1 ">
                        <h4 class="text-lg sm: text-xl font-semibold">Follow us</h4>
                        <ul class="mt-4 flex space-x-4">
                            <div class="flex space-x-4 social-icon">
                                <a href="#!" role="button">
                                    <!-- Facebook -->
                                    <i class="fa-brands fa-facebook  hover:fa-spin fa-2xl pl-4 pb-6 sm:px-1  "
                                        style="color: #9ca3af;"></i>
                                </a>

                                <a href="#!" role="button">
                                    <!-- Instagram -->
                                    <i class="fa-brands fa-instagram fa-2xl  pb-6 sm:px-1" style="color: #9ca3af;"></i>
                                </a>

                                <a href="#!" role="button">
                                    <!-- Google -->
                                    <i class=" pb-6 sm:px-1 fa-brands fa-google-plus-g fa-2xl " style="color: #9ca3af;"></i>
                                </a>
                                <a href="#!" role="button">
                                    <i class="fa-brands fa-whatsapp fa-2xl pb-3 sm:px-1" style="color: #9ca3af;"></i>
                                </a>


                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gray-700 inherit connector">
            <div class="text-lg sm:container mx-auto px-4 ">
                <div class="flex justify-between items-center py-6 text-gray-300 ">
                    <div class="text-sm order-2 md:order-1 md:border-t-white border-t w-full text-center pt-5">
                        <p>Copyright © 2023 Tüm Hakları Saklıdır</p>
                    </div>
                    <div class="text-gray-300 font-normal order-1 md:order-2 ">
                        <ul class=" flex space-x-4 text-gray-300 text-lg ">
                            <li><a class="flex pl-4 pb-1  sm: hover:duration-0 text-gray-300 " href="/index.html">Rent A
                                    Car</a></li>
                            <li><a class="flex pb-1 sm:" href="hakkimizda">Hakkımızda</a></li>
                            <li><a class="flex pb-1 sm:" href="#">Hizmetlerimiz</a></li>
                            <li><a class="flex pb-1 sm:" href="#">Bizimle İletişime Geçin</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {
        }
    }
});

</script>





<style scoped>
.connector li a:hover {
    font-size: 22px;
    padding: 0 10px 0 10px;
    transition-duration: 300ms;
    color: rgb(17 24 39 / var(--tw-text-opacity));
    --tw-text-opacity: 1;
    font-weight: light;
}

.footer {
    /* Adjust spacing and other styles as needed */
}

/* Add responsive styling for different screen sizes */
@media screen and (max-width: 767px) {
    .col-span-1 {
        grid-column: span 1 !important;
        /* Force single column on small screens */
    }

    .mt-6 {
        margin-top: 1.5rem;
        /* Adjust spacing on small screens */
    }

    .text-xl {
        font-size: 1.25rem;
        /* Adjust header text size on small screens */
    }

    .flex {
        flex-direction: column;
        /* Stack social media icons vertically on small screens */
    }

    .space-x-4 {
        margin-top: 1rem;
        /* Adjust spacing between social media icons on small screens */
    }
}

footer {
    color: #fff;
}

#foot li a:hover {
    @apply px-5 font-light transition text-gray-400 ease-in duration-300;
}

ul {
    padding: 0px;
}

ol,
ul {
    margin-bottom: 0px;
}

.social-icon {
    @apply mb-0 float-right p-0;
}

.social-icon li {
    @apply inline-block list-none;
}




footer p {
    margin-bottom: 0;
}

ul.address1 i.fa-envelope {
    font-size: 18px;
    top: 4px;
}

footer ul.social-icon {
    float: left;
}

footer .social-icon li i:hover {
    background: #4b8800;
    border-color: #4b8800;
}

.footer-bottom {
    background: #4b8800;
    padding: 10px 0px;
}

.footer-bottom ul li {
    display: inline;
    margin-right: 20px;
    font-size: 18px;
}

.footer-bottom ul li a {
    color: #fff;
}

.footer-bottom ul {
    float: right;
}

.footer-bottom ul li:last-child {
    margin-right: 0;
}
</style>	