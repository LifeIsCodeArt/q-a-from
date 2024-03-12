<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})
</script>


<template>

    <a class="h-full w-[29px] flex justify-center items-end mr-[5px] pb-[7px]" :href="item.link">

        <img :src="item.icon" :alt="item.icon_description" >

    </a>

</template>

<style scoped>


</style>