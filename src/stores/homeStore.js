import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useHomeItemsStore = defineStore('homeItems', () => {

    const darkTheme = ref(false)

    const changeTheme = () => {

        darkTheme.value = !darkTheme.value;

    }

    const themeCheck = computed(()=> darkTheme.value)

    const questions = ref([

        {
            id: 1,
            question: 'Question 1',
            answers: [{id:1, answer:'Lorem ipsum text,lorem ipsum textLorem ipsum text'}, {id:2, answer:'Answer 2'}, {id:3, answer:'Answer 3'}, {id:4, answer:'Answer 4'}]
        },

        {
            id: 2,
            question: 'Question 2',
            answers: [{id:1, answer:'Answer 1'}, {id:1, answer:'Answer 2'}, {id:3, answer:'Answer 3'}, {id:4, answer:'Answer 4'}]
        },

        {
            id: 3,
            question: 'Question 3',
            answers: [{id:1, answer:'Answer 1'}, {id:2, answer:'Answer 2'}, {id:3, answer:'Answer 3'}]
        },

        {
            id: 4,
            question: 'Question 4',
            answers: [{id:1, answer:'Answer 1'}, {id:2, answer:'Answer 2'}]
        },

        {
            id: 5,
            question: 'Question 5',
            answers: [{id:1, answer:'Answer 1'},{id:2, answer:'Answer 2'},{id:3, answer:'Answer 3'}]
        },

        {
            id: 6,
            question: 'Question 6',
            answers: [{id:1, answer:'Answer 1'},{id:2, answer:'Answer 2'},{id:3, answer:'Answer 3'},{id:4, answer:'Answer 4'}]
        },

    ])


    const questions2 = ref([

        {
            id: 1,
            question: 'Question 1',
            answers: [{id:1, answer:'Lorem ipsum text,lorem ipsum textLorem ipsum text'}, {id:2, answer:'Answer 2'}, {id:3, answer:'Answer 3'}, {id:4, answer:'Answer 4'}]
        },

        {
            id: 2,
            question: 'Question 2',
            answers: [{id:1, answer:'Answer 1'}, {id:1, answer:'Answer 2'}, {id:3, answer:'Answer 3'}, {id:4, answer:'Answer 4'}]
        },

        {
            id: 3,
            question: 'Question 3',
            answers: [{id:1, answer:'Answer 1'}, {id:2, answer:'Answer 2'}, {id:3, answer:'Answer 3'}]
        },

        {
            id: 4,
            question: 'Question 4',
            answers: [{id:1, answer:'Answer 1'}, {id:2, answer:'Answer 2'}]
        },

        {
            id: 5,
            question: 'Question 5',
            answers: [{id:1, answer:'Answer 1'},{id:2, answer:'Answer 2'},{id:3, answer:'Answer 3'}]
        },

        {
            id: 6,
            question: 'Question 6',
            answers: [{id:1, answer:'Answer 1'},{id:2, answer:'Answer 2'},{id:3, answer:'Answer 3'},{id:4, answer:'Answer 4'}]
        },

    ])

    return { darkTheme, changeTheme, questions, questions2, themeCheck}
})
