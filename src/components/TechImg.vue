<template>
  <img :src="selected.src" :alt="name">
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    name: String
  },
  setup (props) {
    const technologies = [
      {
        name: 'vue',
        src: 'https://img.icons8.com/color/96/000000/vue-js.png'
      },
      {
        name: 'laravel',
        src: 'https://img.icons8.com/fluent/96/000000/laravel.png'
      },
      {
        name: 'tailwindcss',
        src: require('@/assets/images/tailwindcss.svg')
      },
      {
        name: 'react',
        src: require('@/assets/images/react.svg')
      },
      {
        name: 'mui',
        src: require('@/assets/images/mui.svg')
      },
      {
        name: 'bootstrap',
        src: require('@/assets/images/bootstrap.svg')
      }
    ]

    const selected = ref('')

    selected.value = technologies.filter(t => t.name === props.name)[0]

    return {
      selected
    }
  }
}
</script>

<style>

</style>
