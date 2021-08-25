<template>
  <header-wrapper />
  <Home />
</template>

<script>
import HeaderWrapper from '@/components/layouts/Header.vue'
import Home from '@/views/Home.vue'

export default {
  components: {
    HeaderWrapper,
    Home
  }
}
</script>
