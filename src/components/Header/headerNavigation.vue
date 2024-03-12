<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})
</script>


<template>

    <li class="mr-[23px] flex items-center ">



        <img :src="item.icon" :alt="item.icon_description" class="">


        
        <RouterLink :to="item.link" class="font-red_display pt-[1px] pl-[4.5px] tracking-wide ">

            {{item.text}}

        </RouterLink>



    </li>

</template>

<style scoped>
svg {
    fill: #5046e5;
}

</style>