<template>
  <section id="About" class="container mx-auto flex justify-start flex-col min-h-screen text-center">
    <div class="welcome-message mt-44">
      <h1 class="font-bold text-8xl mb-6">Hi, I'm Ali</h1>
      <p>A <span>Full Stack Web Developer,</span> who is very enthusiastic
      <br> about building amazing web apps
      <br>and <strong>learning</strong> new stuff.</p>
    </div>
    <div class="section-buttons w-full flex justify-center mt-10">
      <button @click="scrollTo('Work')" href="https://github.com/AliMahmoud80" class="text-center font-bold p-2 bg-black hover:bg-white text-white hover:text-black border  border-white text-black rounded-md w-[120px] md:w-[200px] transition-all duration-300 ease-in-out  outline-none">My Work</button>
      <button @click="scrollTo('Contact')" href="https://github.com/AliMahmoud80" class="ml-4 text-center font-bold p-2 bg-black hover:bg-white text-white hover:text-black border border-white text-black rounded-md w-[120px] md:w-[200px] transition-all duration-300 ease-in-out  outline-none">Contact Me</button>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

export default {
  setup () {
    const scrollTo = (section) => {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: {
          y: `#${section}`,
          offsetY: 100
        }
      })
    }

    onMounted(() => {
      gsap.from('.welcome-message h1', {
        y: -20,
        opacity: 0,
        duration: 1
      })

      gsap.from('.welcome-message p', {
        y: 20,
        opacity: 0,
        duration: 1
      })

      gsap.from('.section-buttons', {
        y: 20,
        opacity: 0,
        duration: 1
      })
    })

    return {
      scrollTo
    }
  }
}
</script>

<style lang="scss">
.welcome-message {
  h1 {
    background: linear-gradient(90deg, rgba(0,223,216,1) 0%, rgba(0,124,240,1) 0%, rgba(0,223,216,1) 100%);
    background-clip: text !important;
    -webkit-text-fill-color: transparent;
  }
  p {
    @apply text-base;
    @apply md:text-2xl;
    @apply font-medium;
    @apply ml-1;
    span {
      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(207,86,117,1) 0%, rgba(235,63,107,1) 100%);;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
