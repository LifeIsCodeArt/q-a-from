<script setup>

import {useHomeItemsStore} from '@/stores/homeStore.js'
import {computed} from "vue";

const darkTheme = (computed(()=> useHomeItemsStore().themeCheck))


const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    },
})

</script>


<template>

    <a v-if="!darkTheme" class="h-[37px] w-[37px] flex justify-center items-center mr-[6.38px]" :href="item.link">

        <img  :src="item.icon" :alt="item.icon_description" >

    </a>

    <a v-else class="h-[37px] w-[37px] flex justify-center items-center mr-[6.38px]" :href="item.link">

        <img :src="item.icon_white" :alt="item.icon_description" >

    </a>


</template>

<style scoped>


</style>