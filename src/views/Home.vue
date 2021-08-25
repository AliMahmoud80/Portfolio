<template>
  <div class="main">
    <about-section />
    <skills-section />
    <work-section />
    <contact-section />
  </div>
</template>

<script>
import AboutSection from '@/components/HomeSections/AboutSection.vue'
import SkillsSection from '@/components/HomeSections/SkillsSection.vue'
import WorkSection from '@/components/HomeSections/WorkSection.vue'
import ContactSection from '@/components/HomeSections/ContactSection.vue'

export default {
  components: {
    AboutSection,
    SkillsSection,
    WorkSection,
    ContactSection
  }
}
</script>
