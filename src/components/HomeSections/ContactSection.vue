<template>
  <div id="Contact" class="flex flex-col items-center lg:items-start lg:flex-row lg:justify-around h-screen w-full">
    <div class="mt-56 text-center flex flex-col gap-2 justify-center">
      <p class="text-3xl font-bold">I live in Egypt, Alexandria.</p>
      <p class="text-xl font-light">ali.mahmoud7080@gmail.com</p>
      <p class="text-xl font-light">(+20) 122 935 3047</p>
      <div class="flex justify-center">
      <p class="bg-white rounded-xl inline-block mt-4 p-3">
        <a href="https://github.com/AliMahmoud80" target="_blank">
          <img src="https://img.icons8.com/windows/60/000000/github.png"/>
        </a>
      </p>
      <p class="bg-white rounded-xl inline-block mt-4 ml-5 p-3">
        <a href="https://www.upwork.com/freelancers/~01e1e01e425c7d3fbc" target="_blank">
          <img src="https://img.icons8.com/ios-filled/60/000000/upwork.png"/>
        </a>
      </p>
      </div>
    </div>
 </div>
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

export default {
  setup () {
    onMounted(() => {
      gsap.from('#Contact div', {
        scrollTrigger: {
          trigger: '#Contact',
          start: 'top center'
        },
        y: 30,
        opacity: 0,
        duration: 1.5
      })
    })
  }
}
</script>

<style>
</style>
