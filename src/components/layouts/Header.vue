<template>
<header class="header-wrapper sticky top-0 w-full h-16 z-10">
  <div class="container mx-auto flex items-center justify-between h-full">
    <ul>
      <li><button class="font-bold" @click="scrollTo('About')">Ali Mahmoud</button></li>
    </ul>
    <ul>
      <li><button @click="scrollTo('About')">About</button></li>
      <li><button @click="scrollTo('Skills')">Skills</button></li>
      <li><button @click="scrollTo('Work')">Work</button></li>
      <li><button @click="scrollTo('Contact')">Contact</button></li>
    </ul>
  </div>
</header>
</template>

<script>
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

    return {
      scrollTo
    }
  }
}
</script>

<style lang="scss">
.header-wrapper {
  background-color: rgba(0,0,0,0.5);
  backdrop-filter: saturate(100%) blur(5px);
  z-index: 9999;
  box-shadow: inset 0 -1px 0 0 hsla(0,0%,100%,0.1);

  .divider {
    background: hsla(0,0%,100%,0.1);
    height: '1px'
  }

  ul {
    @apply flex;

    li {
      @apply px-2;
      @apply text-gray-300;
      @apply hover:text-white;

      button {
        @apply font-semibold;
      }
      button:focus {
        outline: none;
      }
    }
  }
}
</style>
