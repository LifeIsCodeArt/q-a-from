import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderItemsStore = defineStore('headerItems', () => {

  const headerNavigation = ref([

    {
      id:1,
      text:'Menu item 1',
      link:'/',
      icon:'./src/assets/icons/header-menu/phone-icon.svg',
      icon_description:'Phone'
    },

    {
      id:2,
      text:'Menu item 2',
      link:'/',
      icon:'./src/assets/icons/header-menu/tools-icon.svg',
      icon_description:'Tools'
    },

    {
      id:3,
      text:'Menu item 3',
      link:'/',
      icon:'./src/assets/icons/header-menu/android-icon.svg',
      icon_description:'Android'
    },

    {
      id:4,
      text:'Menu item 4',
      link:'/',
      icon:'./src/assets/icons/header-menu/apple-icon.svg',
      icon_description:'Apple inc'
    },


  ])

  const menuThree = headerNavigation.value.filter((item) => item.id<4)


  const socialLinks = ref([

    {
      id:1,
      icon:'./src/assets/icons/socials/facebook-icon.svg',
      link:'/',
      icon_description:'Facebook'
    },

    {
      id:2,
      icon:'./src/assets/icons/socials/twitter-icon.svg',
      link:'/',
      icon_description:'Twitter'
    },

    {
      id:3,
      icon:'./src/assets/icons/socials/instagram-icon.svg',
      link:'/',
      icon_description:'Instagram'
    },

    {
      id:4,
      icon:'./src/assets/icons/socials/youtube-icon.svg',
      link:'/',
      icon_description:'Youtube'
    },

    {
      id:5,
      icon:'./src/assets/icons/socials/google-sheets-icon.svg',
      link:'/',
      icon_description:'Google sheets'
    },

    {
      id:6,
      icon:'./src/assets/icons/socials/share-icon.svg',
      link:'/',
      icon_description:'Share'
    },


  ])

  const headerMenu = ref([

    {
      id:1,
      text:'Item',
      path:'/'
    },

    {
      id:2,
      text:'Item',
      path:'/'
    },

    {
      id:3,
      text:'Item',
      path:'/'
    },

    {
      id:4,
      text:'Item',
      path:'/'
    },

    {
      id:5,
      text:'Item',
      path:'/'
    },

    {
      id:6,
      text:'Item',
      path:'/'
    },

    {
      id:7,
      text:'Item',
      path:'/'
    },

    {
      id:8,
      text:'Item',
      path:'/'
    },


  ])

  return { headerNavigation, socialLinks, headerMenu, menuThree}
})
