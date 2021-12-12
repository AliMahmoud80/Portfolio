<template>
  <div id="Skills" class="container mx-auto max-w-xl skills mt-44 flex flex-col items-center w-full min-h-screen">
    <h1 class="text-4xl font-bold">Technologies i use</h1>
    <div class="mt-16 flex flex-wrap justify-center gap-5 w-full">
      <div>
        <img src="https://img.icons8.com/color/96/000000/javascript.png" alt="Javascript"/>
        <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics" target="_blank">Javascript</a>
      </div>
      <div>
        <img src="https://img.icons8.com/color/96/000000/vue-js.png" alt="Vue JS"/>
        <a href="https://vuejs.org/" target="_blank">Vue Js</a>
      </div>
      <div>
        <img class="min-w-[95px]" src="@/assets/images/react.svg"/>
        <a href="https://reactjs.org/" target="_blank">React JS</a>
      </div>
      <div>
        <img src="@/assets/images/tailwindcss.svg" class="mt-3" width="96" alt="TailwindCss">
        <a href="https://tailwindcss.com/" target="_blank" class="mt-8">TailwindCss</a>
      </div>
      <div>
        <img src="@/assets/images/vuetify.svg" width="96" style="height: 96px !important" alt="Vuetify">
        <a href="http://vuetifyjs.com/" target="_blank" class="mt-1">Vuetify</a>
      </div>
      <div>
        <img class="mt-1 max-w-[95px]" src="@/assets/images/mui.svg"/>
        <a class="mt-5" href="https://material-ui.com" target="_blank">Material UI</a>
      </div>
      <div>
        <img src="https://img.icons8.com/color/96/000000/sass.png"/>
        <a href="https://sass-lang.com/" target="_blank">Sass</a>
      </div>
      <div>
        <img src="@/assets/images/bootstrap.svg"  width="" alt="Bootstrap" />
        <a href="https://getbootstrap.com" target="_blank" class="mt-6">Bootstrap</a>
      </div>
      <div>
        <img src="https://img.icons8.com/color/96/000000/typescript.png" alt="TypeScript"/>
        <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a>
      </div>
      <div>
        <img src="https://img.icons8.com/dusk/96/000000/php-logo.png" alt="PHP"/>
        <a href="https://php.net/" target="_blank">PHP</a>
      </div>
      <div>
        <img src="https://img.icons8.com/fluent/96/000000/laravel.png" alt="Laravel"/>
        <a href="https://laravel.com/" target="_blank">Laravel</a>
      </div>
      <div>
        <img src="https://img.icons8.com/color/96/000000/nodejs.png"/>
        <a href="https://nodejs.org/en/" target="_blank">Node JS</a>
      </div>
      <div class="mt-10">
        <img src="@/assets/images/strapi.svg" width="96" alt="Strapi" />
        <a href="https://strapi.io/" target="_blank" class="mt-8">Strapi</a>
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
      gsap.from('#Skills h1', {
        scrollTrigger: {
          trigger: '#Skills',
          start: 'top center'
        },
        y: -30,
        opacity: 0,
        duration: 1.2
      })

      gsap.from('#Skills div div', {
        scrollTrigger: {
          trigger: '#Skills',
          start: 'top center'
        },
        y: 30,
        opacity: 0,
        duration: 1.2
      })
    })
  }
}
</script>

<style lang="scss">
.skills {
  div div {
    @apply flex;
    @apply flex-col;
    @apply items-center;

    a {
      @apply text-blue-300;
    }
  }
}
</style>
