<template>
  <div
    class="card cursor-pointer w-full lg:w-1/3 rounded-md p-3 px-4 lg:p-2"
    @click="setIsOpen(true)"
  >
    <div
      class="
        bg-white
        text-black
        rounded
        flex flex-col
        p-5
        transition
        duration-300
        ease-in-out
        transform
        hover:scale-105
        h-52
        justify-between
      "
    >
      <p href="#" class="font-semibold text-xl">
        {{ name }}
      </p>
      <p class="mt-3">
        {{ description.slice(0, 150) }} 
        {{ (description.length > 150) ? '...' : '' }}
      </p>
      <div
        v-if="technologies"
        class="mt-3 pt-3 border-t border-gray-100 flex align-center gap-3"
      >
        <TechImg v-for="(tech, i) in technologies" :key="i" :name="tech" />
      </div>
    </div>
  </div>
  <ProjectDialog 
    v-if="isOpen"
    :name="name"
    :description="description"
    :features="features"
    :preview="preview"
    :viewLink="viewLink"
    :demoLinks="demoLinks"
    :open="isOpen"
    @closeDialog="setIsOpen(false)"
  />
</template>

<script>
import { ref, defineAsyncComponent } from "vue";
import TechImg from "@/components/TechImg.vue";

export default {
  props: {
    name: String,
    description: String,
    technologies: Array,
    viewLink: String,
    demoLinks: Array,
    features: Array,
    preview: Array
  },
  components: {
    TechImg,
    ProjectDialog: defineAsyncComponent(() => import('./ProjectDialog.vue'))
  },

  setup () {
    const isOpen = ref(false);

    return {
      isOpen,
      setIsOpen (value) {
        isOpen.value = value
      },
    }
  }
}
</script>

<style>
.card div img {
  max-width: 1.7rem;
  max-height: 1.7rem;
  height: auto;
}
</style>
