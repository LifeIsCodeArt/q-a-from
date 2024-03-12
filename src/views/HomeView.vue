<script setup>

import {useHomeItemsStore} from '@/stores/homeStore.js'
import {useUsersStore} from "@/stores/user-store.js";

import {computed, onMounted, ref} from "vue";

import PopUp from '@/components/Registration.vue'
import Questions from "@/components/Questions.vue";

const store = useHomeItemsStore()

const darkTheme = (computed(()=> store.themeCheck))

const questions = (computed(()=> store.questions))

const questionsTotal = questions.value.length

const currentQuestion = ref(1)

const dataUser = computed(() =>{return useUsersStore().userData})

const openModal = ref(false)

const slideBack = () => {

    currentQuestion.value = currentQuestion.value - 1

}

const slideFurther = () => {

    currentQuestion.value = currentQuestion.value + 1

}

const userData = ref([localStorage.getItem('first')])


onMounted(()=>{

})
</script>

<template>
    <div v-if="!dataUser" class="absolute top-[92px] right-[25%] font-medium text-[18px] leading-[25.2px] tracking-[0.5px] cursor-pointer text-[#0DD0BA]" @click="openModal = !openModal">Registration</div>

    <div v-else class="absolute top-[56px] right-[20%] font-medium text-[18px] leading-[25.2px] tracking-[0.5px] flex items-center text-[#0DD0BA] h-[100px]">

        <p :class="darkTheme ? 'text-white' : 'text-black'"> Welcome </p>  <p class="block ml-[15px]" :class="darkTheme ? 'text-[#0DD0BA]' : 'text-[#2A86E5]'">{{ userData[0] }}</p>

        <button @click="useUsersStore().logOut()" class="ml-[70px] px-[15px] py-[5px] border-2  rounded hover:bg-red-200 hover:duration-1000" :class="darkTheme ? 'text-white border-white hover:text-black' : 'text-black border-black'" >Quit</button>

    </div>


    <PopUp v-if="openModal" @close-model="openModal = !openModal"/>

    <div class=" pt-[44px] px-[375px] pb-[140px] max-xl:min-w-[768px] max-xl:my-0 max-xl:mx-auto max-xl:px-[24px] max-md:min-w-[350px] max-md:my-0 max-md:mx-0 max-md:px-[15px] relative" :class="darkTheme ? 'bg-[#0E1219]' : 'bg-white '">

       <Questions v-show="currentQuestion === item.id" v-for="item in questions" :item="item" :key="item.id"/>




        <button v-show="currentQuestion !== 1" class="absolute w-[68px] h-[38px] rounded top-[570px] left-[700px] bg-white flex justify-center items-center z-[2] border-2 border-black" @click="slideBack()"
                :class="currentQuestion === 1 ? 'cursor-not-allowed pointer-events-none bg-gray-400 text-white' : 'cursor-pointer hover:bg-green-200 hover:duration-1000' ">

            Prev

        </button>

        <button v-show="currentQuestion !== questionsTotal" class="absolute w-[68px] h-[38px] rounded top-[570px] right-[700px] bg-white flex justify-center items-center z-[2] border-2 border-black" @click="slideFurther()"
                :class="currentQuestion === questionsTotal ? 'cursor-not-allowed pointer-events-none bg-gray-400 text-white' : 'cursor-pointer hover:bg-green-200 hover:duration-1000' ">

            Next

        </button>

    </div>


</template>


<style>


.background{
    background: linear-gradient(90deg, #0DD0BA 0%, #2A86E5 100%)
}

</style>