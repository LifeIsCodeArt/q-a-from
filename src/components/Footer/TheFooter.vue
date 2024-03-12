<script setup>

    import {useFooterItemsStore} from "@/stores/footerStore.js";
    import {useHomeItemsStore} from "@/stores/homeStore.js";

    import {computed} from "vue";

    import Socials from '@/components/Footer/footerSocials.vue'
    import FooterList from '@/components/Footer/footerList.vue'



    const socials = (computed(()=>useFooterItemsStore().socialLinks))

    const items = computed(()=>useFooterItemsStore().footerList)

    const darkTheme = (computed(()=> useHomeItemsStore().themeCheck))

</script>


<template>

    <div class="w-full px-[28px] py-[28px] max-xl:px-[20px] max-xl:my-0 max-xl:mx-auto max-xl:px-[20px] max-md:py-[20px]" :class="darkTheme ? 'bg-[#0E1219]' : 'bg-white'">

        <div class="background rounded-xl h-auto py-[20px] pl-[347px] flex max-xl:flex-col max-xl:px-[30px] max-xl:pt-[30px] max-xl:pb-[40px] max-md:pl-[15px]">

            <div class=" h-auto w-[351px] pt-[84.5px] pb-[21px] rounded-2xl pl-[30px] max-xl:flex max-xl:flex-col max-xl:items-center max-xl:w-full  shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-md:w-[310px]"
                 :class="darkTheme ? 'text-white bg-[#202434]' : 'text-[#0DD0BA] bg-white'">


                <div class="text-center text-black text-[30px] font-red_display font-normal leading-[23px] tracking-[0.5px] pr-[20px]" :class="darkTheme ? 'text-white ' : 'text-black'">

                    LOGOTYPE

                </div>


                <div class="mt-[65.6px] mb-[35px]">

                    <p class=" text-[16px] font-red_display font-normal leading-[23px] tracking-[0.5px] w-[282px] max-xl:w-[524px] max-xl:text-center max-md:w-[253px] max-md:pr-[14px] max-md:text-left">

                       <span class="mb-[12px] block">Lorem Ipsum is simply dummy</span>
                        when an unknown printer took a
                        galley of type and scrambled it to
                        make a type specimen book. It has
                        survived not only five

                    </p>

                </div>

                <div class="flex justify-end items-center ml-[28px] mr-[58px] max-md:ml-[41px]">

                    <Socials v-for="item in socials" :item="item" :key="item.id" />


                </div>

            </div>


            <div class="flex flex-col  ml-[70px] mt-[50px] max-xl:ml-0 max-xl:mt-[30px]">

                <div class="flex mb-[66px] max-xl:justify-between max-xl:mb-[32px] max-md:flex-col max-md:items-center">

                    <FooterList v-for="item in items" :item="item" :key="item.id"  />

                </div>

                <p class="text-white pl-[20px] text-[13px] font-red_display italic font-thin leading-[17px] tracking-[0.5px] max-xl:text-center">

                    Copyright © 2024. Tous droits réservés.


                </p>

            </div>

        </div>

    </div>

</template>

<style scoped>
    .background{
        background: linear-gradient(90deg, #0DD0BA 0%, #2A86E5 100%)
    }
</style>