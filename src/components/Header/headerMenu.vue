<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})
</script>


<template>

    <li class="flex mr-[28px] items-center ">

        <a :href="item.icon_path" class=" font-medium text-[18px] leading-[25.2px] tracking-[0.5px] recreate">

            {{item.text}}

        </a>

    </li>

</template>

<style scoped>

</style>