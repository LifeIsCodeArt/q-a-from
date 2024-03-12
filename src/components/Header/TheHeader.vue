<script setup>

import { useHeaderItemsStore } from "@/stores/headerStore.js";
import { useHomeItemsStore } from "@/stores/homeStore.js";

import { computed, ref } from "vue";

import NavItem from '@/components/Header/headerNavigation.vue'
import SocialItem from '@/components/Header/headerSocials.vue'
import MenuItem from '@/components/Header/headerMenu.vue'

const darkTheme = (computed(()=> useHomeItemsStore().themeCheck))


const store = useHeaderItemsStore()

const navItems = (computed(()=>store.headerNavigation))

const navItemsThird = (computed(()=>store.menuThree))

const socials = (computed(()=>store.socialLinks))

const menuItems = (computed(()=>store.headerMenu))

const showModal = ref(false)



</script>


<template>
    <div class="min-w-full  max-xl:w-[768px] max-md:w-[380px] max-xl:my-0 max-xl:mx-auto relative">

        <div class="px-[375px] background h-[50px] flex items-center  justify-between max-xl:px-0 max-xl:pl-[24px] max-xl:pr-[14px]  max-md:justify-center">

            <nav class="flex items-center">

                <ul class="flex max-xl:hidden">

                    <NavItem v-for="item in navItems" :item="item" :key="item.id" class="text-white font-medium leading-[18px] text-[14px] "/>

                </ul>

                <ul class="flex max-xl:flex xl:block max-md:hidden 2xl:hidden xl:hidden">

                    <NavItem v-for="item in navItemsThird" :item="item" :key="item.id" class="text-white font-medium leading-[18px] text-[14px] pt-[1px] pl-[4.5px]"/>

                </ul>

            </nav>


            <div class="flex items-center justify-center h-[29px] ">

                <SocialItem v-for="item in socials" :item="item" :key="item.id" />

                <div class="ml-[15px] w-[54px] h-full rounded-[50px] flex items-center justify-center cursor-pointer max-md:ml-[85px]"
                     :class="darkTheme ? 'bg-black' : 'bg-white'">

                    <button class="flex justify-between block" @click="useHomeItemsStore().changeTheme">


                        <img v-show="!darkTheme" src="@/assets/icons/header-mode/light-theme.png" alt="Light theme" class="z-[10px] w-[25px] h-[25px] mr-[22px]">


                        <img v-show="darkTheme" src="@/assets/icons/header-mode/dark-theme.png" alt="Dark theme" class="z-[10px] w-[25px] h-[25px] ml-[22px]">

                    </button>

                </div>

            </div>

        </div>

        <div class="h-[110px] px-[375px] flex items-center max-xl:justify-between max-xl:min-w-[768px] max-md:min-w-[380px] max-xl:pl-[24px] max-xl:pr-[14px] max-xl:h-[60px]" :class="darkTheme ? 'bg-[#0E1219]' : 'bg-white'">

            <div class="max-xl:flex max-xl:justify-between max-xl:items-center">

                <img v-if="!darkTheme" src="@/assets/icons/logos/logo-black.png" alt="" class="w-[134px] h-[18px]">

                <img v-else src="@/assets/icons/logos/logo-white.png" alt="" class="w-[134px] h-[18px]">

                <div class="">

                </div>

            </div>

            <ul class="flex ml-[68px] mr-[221px] max-2xl:hidden">

                <MenuItem v-for="item in menuItems" :item="item" :key="item.id" :class="darkTheme ? 'text-[#0DD0BA]' : 'text-[#2A86E5]' "/>

            </ul>


            <div id="burger" class="hidden max-xl:block cursor-pointer w-[25px] h-[21px] border-t-[4px] border-b-[4px] border-[#2A86E5] max-xl:flex items-center max-xl:justify-center  relative mr-[15px]"
                 @click="showModal = !showModal" :class="showModal ? 'border-none' : ''">

                <span class="w-full h-[4px] bg-[#2A86E5]" :class="showModal ? 'rotate-[45deg] w-[30px] absolute top-50%' : 'rotate-none'"></span>

                <span v-show="showModal" class="w-full h-[4px] bg-[#2A86E5]" :class="showModal ? 'rotate-[-45deg] w-[30px] absolute top-50%' : 'rotate-none'"></span>

            </div>

            <div v-if="showModal" class="absolute w-full h-[950px] bottom-[-139px] left-0  z-[15]  flex flex-col pr-[7px] max-md:bottom-[-16%]" :class="darkTheme ? 'bg-[#0E1219]' : 'bg-white'">

                <div class="pl-[20px] pr-[5px] mb-[75px]">

                    <input type="text" class="rounded-3xl h-[42px] :placeholder:text-blue-200 w-full pl-[21px]" placeholder="Search for..." :class="darkTheme ? 'bg-[#183A5D] colorChange' : 'bg-[#EEEEEE]'">

                    <img src="@/assets/icons/header-menu/search-icon.png" alt="" class="absolute top-[10px] right-[30px] h-[20px] w-[20px]">


                </div>

                <ul class="flex flex-col items-center mb-[100px]">

                    <li v-for="item in menuItems" :key="item.id" class="mb-[58px] text-[#2A86E5] font-medium font-red_display text-[18px] leading-[25.2px] tracking-[0.5px] max-md:mb-[28px]">

                        <a href="/" >

                            {{item.text}}

                        </a>

                    </li>

                </ul>

                <ul class="flex px-[42px] justify-between items-center max-md:flex-col max-md:h-[141px]">

                    <NavItem v-for="item in navItems" :item="item" :key="item.id" class=" text-[18px] leading-[18px] font-medium" :class=" darkTheme ? 'text-white' : 'text-[#707070]'"/>

                </ul>

            </div>

        </div>

    </div>
</template>

<style scoped>

.background{
    background: linear-gradient(90deg, #0DD0BA 0%, #2A86E5 100%)
}

.colorChange::placeholder{
    color: white;
}

#burger{

}

</style>