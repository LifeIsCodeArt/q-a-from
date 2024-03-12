<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})

import { useHomeItemsStore } from "@/stores/homeStore.js";

import { computed, ref } from "vue";


const darkTheme = (computed(()=> useHomeItemsStore().themeCheck))

const questions = (computed(()=> useHomeItemsStore().questions))

const sendingData = ref(useHomeItemsStore().questions2)

const numberQuestions = questions.value.length

const currentAnswer = ref(Number)

const finishButton = computed(()=> sendingData.value[sendingData.value.length-1].answers.length)


const addAnswer = (id, answer, currentAnswerNew) =>  {

    sendingData.value[id-1].answers = answer

    currentAnswer.value =  currentAnswerNew

}

const showData = () => {
    console.log('Вот вопросы-ответы:', sendingData.value)
    console.log('Данные пользователя:', localStorage.getItem('first'), localStorage.getItem('last'),localStorage.getItem('email') )
}
</script>


<template>

    <div class="border border-2 rounded-xl relative flex flex-col items-center  w-auto h-[500px] px-[15px] pt-[70px] pb-[35px] max-xl:mr-0 max-xl:w-[190px] max-xl:items-center max-md:justify-center max-md:pb-[25px] max-md:pt-0 max-md:mr-0"
         :class="darkTheme ? 'border-white' : 'border-black'">


        <h2 class="mb-[23px] pl-[20px] text-[24px] font-red_display font-bold leading-[31px] tracking-[0.5px]" :class="darkTheme ? 'text-white' : 'text-black'">

            {{item.question}}

        </h2>

        <ul class="flex flex-col justify-around pl-[20px] h-[300px]">

            <li @click="addAnswer(item.id, listItem.answer, listItem.id) "  v-for="listItem in item.answers" :key="item.id" class="cursor-pointer rounded text-center font-bold text-[15px] px-[20px] py-[10px] mb-[30px] font-red_display leading-[20px] tracking-[0.5px]  mb-[15px] max-xl:list-none max-xl:pr-[10px] hover:bg-green-200 hover:duration-1000 hover:easy-in-out"
                 :class="[ darkTheme ? 'text-white border-2 border-white' : 'text-black border-2 border-black',
                 currentAnswer === listItem.id ? 'bg-green-500 hover:bg-green-500' : 'text-black ']">


                <p  class="w-full h-full text-center">{{listItem.answer}}</p>


            </li>

        </ul>

        <div v-show="item.id === numberQuestions" class="flex items-center justify-center">

            <button @click="showData()" class="ml-[13px] border-2 border-black rounded font-bold text-[15px] px-[20px] py-[10px] font-red_display leading-[20px] tracking-[0.5px]  mt-[15px]  hover:bg-green-200 hover:duration-1000 hover:easy-in-out"
                    :class="[darkTheme ? ' border-2 border-white text-white' : 'text-black border-2 border-black', finishButton > 5 ? 'hover:bg-green-400 ' : 'cursor-not-allowed pointer-events-none bg-gray-200'] ">

                Send Answers

            </button>

        </div>

    </div>
    
</template>

<style scoped>

</style>