<script setup>

const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})
</script>


<template>

    <div class="flex flex-col mr-[123px] w-auto h-auto px-[15px] pt-[45px] pb-[35px] max-xl:mr-0 max-xl:w-[190px] max-xl:items-center max-md:justify-center max-md:pb-[25px] max-md:pt-0 max-md:mr-0" >

        <h2 class="mb-[13px] text-white text-[24px] font-red_display font-bold leading-[31px] tracking-[0.5px]">

            {{item.header}}

        </h2>

        <ul class="flex flex-col pl-[20px]">

            <li v-for="listItem in item.items" :key="item.id" class=" text-white text-[15px] font-red_display font-normal leading-[20px] tracking-[0.5px] list-disc mb-[3px] max-xl:list-none max-xl:pr-[10px]">

                <a href="/" class="">{{listItem}}</a>

            </li>

        </ul>

    </div>

</template>

<style scoped>


</style>