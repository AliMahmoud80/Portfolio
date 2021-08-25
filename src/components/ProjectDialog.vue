<template>
  <Dialog
    :open="isOpen"
    @close="$emit('closeDialog')"
  >
    <DialogOverlay class="min-h-screen fixed inset-0 z-10 w-full h-full opacity-80 bg-black" />
    <div class="fixed inset-0 flex flex-col lg:flex-row rounded-md bg-white text-black w-[90%] h-[75%] m-auto z-30 overflow-auto">
      <div v-if="preview" class="w-full lg:w-2/4 h-full">
        <Swiper :navigation="true" class="imgs-swiper h-full w-full m-auto">

          <swiper-slide class="h-full flex overflow-auto align-center justify-center" v-for="(img, i) in preview" :key="i">
            <img class="max-w-full p-1 h-auto m-auto" :src="require(`@/assets/images/${img}`)" alt="Preview Image">
          </swiper-slide>
        </Swiper>
      </div>
      <div class="flex flex-col p-6 md:p-8 w-full h-100 flex-grow" :class="{'lg:w-2/4': preview}">
        <DialogTitle class="font-bold text-2xl mb-4">{{ name }}</DialogTitle>
        <DialogDescription class="leading-7 mb-8">
          {{ description }}
          <div v-if="features" class="mt-3">
            <ul>
              <li v-for="(feature, i) in features" :key="i">&bull;&nbsp;{{ feature }}</li>
            </ul>
          </div>
          <div v-if="demoLinks" class="mt-3">
            <ul>
              <li v-for="(link, i) in demoLinks" :key="i" class="overflow-hidden overflow-ellipsis whitespace-nowrap">
                <a target="_blank" :href="link" class="outline-none text-blue-500">{{ link }}</a>
              </li>
            </ul>
          </div>
        </DialogDescription>
        <div class="flex w-full justify-end mt-auto">
          <button class="font-bold p-2 hover:bg-black hover:text-white rounded-md w-[100px] transition-all duration-300 ease-in-out border-0 outline-none" @click="$emit('closeDialog')">Close</button>
          <a target="_blank" :href="viewLink" v-if="viewLink" class="text-center font-bold text-blue-500 p-2 hover:bg-gray-300  rounded-md w-[100px] transition-all duration-300 ease-in-out border-0 outline-none" @click="$emit('closeDialog')">View</a>
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper.scss';

SwiperCore.use([Navigation])

export default {
  props: {
    name: String,
    description: String,
    isOpen: Boolean,
    viewLink: String,
    demoLinks: Array,
    features: Array,
    preview: Array,
  },
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
    Swiper,
    SwiperSlide,
  },
}
</script>

<style>
.imgs-swiper .swiper-slide {
  @apply h-full;
}
.swiper-button-next, .swiper-button-prev {
  @apply absolute;
  @apply top-2/4;
  @apply z-30;
  @apply right-2;
  @apply bg-black;
  @apply text-white;
  @apply rounded-full;
  @apply w-8;
  @apply h-8;
  @apply text-center;
  @apply align-middle;
  @apply font-bold;
  @apply border-2;
  @apply border-white;
  @apply cursor-pointer;
}
.swiper-button-prev {
  @apply left-2;
  @apply right-auto;
}
.swiper-button-next::before {
  @apply relative;
  content: ">";
  top: 1px;
  left: 1px
}
.swiper-button-prev::before {
  @apply relative;
  content: "<";
  top: 1px;
  right: 1px
}
</style>