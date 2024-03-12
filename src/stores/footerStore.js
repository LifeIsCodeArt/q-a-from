
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFooterItemsStore = defineStore('footerItems', () => {


    const socialLinks = ref([

        {
            id: 1,
            icon: './src/assets/icons/footer/facebook-icon.svg',
            icon_white: './src/assets/icons/footer/facebook-white-icon.svg',
            link: '/',
            icon_description: 'Facebook'
        },

        {
            id: 2,
            icon: './src/assets/icons/footer/twitter-icon.svg',
            icon_white: './src/assets/icons/footer/twitter-white-icon.svg',
            link: '/',
            icon_description: 'Twitter'
        },

        {
            id: 3,
            icon: './src/assets/icons/footer/instagram-icon.svg',
            icon_white: './src/assets/icons/footer/instagram-white-icon.svg',
            link: '/',
            icon_description: 'Instagram'
        },

        {
            id: 4,
            icon: './src/assets/icons/footer/youtube-icon.svg',
            icon_white: './src/assets/icons/footer/youtube-white-icon.svg',
            link: '/',
            icon_description: 'Youtube'
        },

        {
            id: 5,
            icon: './src/assets/icons/footer/google-sheets-icon.svg',
            icon_white: './src/assets/icons/footer/google-sheets-white-icon.svg',
            link: '/',
            icon_description: 'Google sheets'
        },

        {
            id: 6,
            icon: './src/assets/icons/footer/share-icon.svg',
            icon_white: './src/assets/icons/footer/share-white-icon.svg',
            link: '/',
            icon_description: 'Share'
        },


    ])

    const footerList = ref([

        {
            id: 1,
            header: 'Categhory',
            items:['item 1','item 3','item 4','item 5','item 6']
        },

        {
            id: 2,
            header: 'Play better',
            items:['item 1','item 2','item 3','item 4','item 5']
        },

        {
            id: 3,
            header: 'Useful links',
            items:['link','link','link','link','link']
        }


    ])

    return { socialLinks, footerList }
})