<template>
  <div
    id="Work"
    class="container mx-auto mt-44 flex flex-col w-full min-h-screen"
  >
    <h1 class="mb-5 w-full text-center text-4xl font-bold">Previous Work</h1>
    <div class="flex flex-wrap justify-center w-full">
      <card 
        v-for="(p, i) in projects"
        :key="i"
        :name="p.name"
        :description="p.description"
        :technologies="p.technologies"
        :features="p.features"
        :preview="p.preview"
        :viewLink="p.viewLink"
        :demoLinks="p.demoLinks"
      >
      </card>
    </div>
    <div class="all-projects w-full flex justify-center mt-5">
      <a target="_blank" href="https://github.com/AliMahmoud80" class="text-center font-bold p-2 bg-white text-black border border-white hover:border-2 hover:bg-black hover:text-white  rounded-md w-[200px] transition-all duration-300 ease-in-out border-0 outline-none">Show all In GitHub</a>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import Card from '@/components/Card.vue'

export default {
  components: { Card },

  setup () {
    const projects = [
      // {
      //   name: 'EXBooks',
      //   description: "Web app to exchange books with others with advanced features built with laravel, vuejs and tailwindcss.",
      //   technologies: ['laravel', 'vue', 'tailwindcss'],
      //   features: ['Fast and performant.', 'Users Authentication/Autherization.', 'Ability to exchange multiable books with one or multiable books.', 'Responsive with small screens', 'Can upload preview photos of the books to reavel its condition.', 'Very easy to use.'],
      //   preview: ['']
      // },
      {
        name: 'Dashboard',
        description: "Complex web app dashboard built with react, react router and material ui.",
        technologies: ['react', 'mui'],
        viewLink: "https://alimahmoud-dashboard.vercel.app/categories",
        features: ['Performant regardless of its complexity.', 'Imported from figma files.', 'Many custom components images uploader, video uploader, video player...', 'Converted from figma design files.', 'NOT RESPONSIVE AS CUSTOMER ASKED'],
        preview: [
          'dashboard/f1.png',
          'dashboard/f2.png',
          'dashboard/f3.png',
          'dashboard/f4.png',
          'dashboard/f5.png',
          'dashboard/f6.png',
          'dashboard/f7.png',
          'dashboard/f8.png',
          'dashboard/f9.png',
        ]
      },
      {
        name: 'Ensora',
        description: "Large web app design built with sass, bootstrap, sass and jquery converted from figma.",
        technologies: ['bootstrap'],
        preview: [
          'ensora/s1.png',
          'ensora/s2.png',
          'ensora/s3.png',
          'ensora/s4.png',
          'ensora/s5.png',
          'ensora/s6.png',
          'ensora/s7.png',
          'ensora/s8.png',
          'ensora/s9.png',
          'ensora/s10.png',
          'ensora/s11.png',
          'ensora/s12.png',
          'ensora/s13.png',
          'ensora/s14.png',
        ],
        demoLinks: [
          'https://ensora-alimahmoud80.vercel.app/HTML/pages/Register/register.html',
          'https://ensora-alimahmoud80.vercel.app/HTML/pages/Login/login.html',
          'https://ensora-alimahmoud80.vercel.app/HTML/pages/Home/Homepage-filled-low-high.html',
          'https://ensora-alimahmoud80.vercel.app/HTML/pages/Equipments/Equipments-category.html',
          'https://ensora-alimahmoud80.vercel.app/HTML/pages/Equipments/Equipments.html',
          'https://ensora-alimahmoud80.vercel.app/HTML/pages/Equipments/Equipments-filled-higher.html',
          'https://ensora-alimahmoud80.vercel.app/HTML/pages/Onboarding',
          'https://ensora-alimahmoud80.vercel.app/HTML/pages/Alarms/Alarms-high.html',
          'https://ensora-alimahmoud80.vercel.app/HTML/pages/Scenes/Scenes-filled.html',
          'https://ensora-alimahmoud80.vercel.app/HTML/pages/Account-Settings',
          'https://ensora-alimahmoud80.vercel.app/HTML/pages/automation-box-settings/automation-box-settings-photo.html',
        ]
      },
      {
        name:'happyCoin',
        description: 'Fully responsive landing page using bootstrap and jquery.',
        technologies: ['bootstrap'],
        viewLink: "https://happycoin-alimahmoud80.vercel.app/",
        demoLinks: ['https://happycoin-alimahmoud80.vercel.app'],
        features: ['Fully responsive', 'Super duper cool timeline'],
        preview: [
          'happycoin/lg.png',
          'happycoin/md.png',
          'happycoin/sm.png',
          'happycoin/xs.png',
        ]
      },
      {
        name:'Phoenix',
        description: 'Responsive web site built using bootstrap.',
        technologies: ['bootstrap'],
        viewLink: "https://phoenix-alimahmoud80.vercel.app/",
        demoLinks: ['https://phoenix-alimahmoud80.vercel.app/'],
        features: ['Fully responsive'],
        preview: [
          'phoenix/s1.png',
          'phoenix/s2.png',
        ]
      },
      {
        name: 'FriendBee',
        description: "Web pages built using bootstrap and jquery.",
        technologies: ['bootstrap'],
        features: ['Fully responsive.', 'Routing functionality'],
        preview: [
          'friendbee/f2.png',
          'friendbee/f6.png',
          'friendbee/f9.png',
          'friendbee/f8.png',
          'friendbee/f7.png',
          'friendbee/f1.png',
          'friendbee/f4.png',
          'friendbee/f3.png',
          'friendbee/f5.png',
        ],
        demoLinks: [
          'https://friendbee.vercel.app/find_befirend.html',
          'https://friendbee.vercel.app/faq.html'
        ]
      },
      // {
      //   name: 'Hassan',
      //   description: "Web pages built using bootstrap and jquery.",
      //   technologies: ['bootstrap'],
      //   preview: ['strapi.svg', 'tailwindcss.svg']
      // },
      {
        name: 'React Blog',
        description: "simple blog built using reactjs and react router.",
        features: ['react routing', 'add/remove articles'],
        technologies: ['react'],
        preview: [
          'react-blog/1.png',
          'react-blog/2.png',
          'react-blog/3.png',
          'react-blog/4.png',
        ],
      },
    ]

    onMounted(() => {
      gsap.from('#Work h1', {
        scrollTrigger: {
          trigger: '#Work',
          start: 'top center'
        },
        y: -30,
        opacity: 0,
        duration: 1.2
      })

      gsap.from('#Work .card', {
        scrollTrigger: {
          trigger: '#Work',
          start: 'top center'
        },
        y: 30,
        opacity: 0,
        duration: 1.2
      })

      gsap.from('#Work .all-projects', {
        scrollTrigger: {
          trigger: '#Work',
          start: 'top center'
        },
        y: 30,
        opacity: 0,
        duration: 1.2
      })
    })

    return {
      projects
    }
  }
}
</script>

<style></style>
