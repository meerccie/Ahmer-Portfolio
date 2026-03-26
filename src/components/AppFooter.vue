<script setup lang="ts">
import { myProfile } from '@/data/portfolioData'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { SiFacebook, SiGithub, SiLinkedin } from 'oh-vue-icons/icons'

addIcons(SiFacebook, SiGithub, SiLinkedin)

const currentYear = new Date().getFullYear()

const socials = [
  {
    name: 'Facebook',
    icon: 'si-facebook',
    link: 'https://web.facebook.com/alahmerrhoden.timpahan.9/',
  },
  {
    name: 'Github',
    icon: 'si-github',
    link: 'https://github.com/meerccie',
  },
  {
    name: 'LinkedIn',
    icon: 'si-linkedin',
    link: 'https://www.linkedin.com/in/timpahan-al-ahmer-rhoden',
  },
]
</script>

<template>
  <footer class="w-full border-t border-white/5 bg-slate-950/50 py-12 mt-auto">
    <div
      class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8"
    >
      <div class="text-center md:text-left">
        <p class="text-white font-black text-[10px] uppercase tracking-widest mb-2">Based in</p>
        <p class="text-slate-400 text-sm font-medium">{{ myProfile.location }}</p>
        <p class="text-slate-500 text-[10px] mt-4 font-bold uppercase tracking-tighter">
          © {{ currentYear }} {{ myProfile.name }}
        </p>
      </div>

      <div class="flex items-center gap-6">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.link"
          target="_blank"
          rel="noopener noreferrer"
          class="group transition-all duration-300"
          :aria-label="social.name"
        >
          <OhVueIcon
            :name="social.icon"
            class="w-6 h-6 text-slate-500 group-hover:text-emerald-400 group-hover:scale-110 transition-all"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  backdrop-filter: blur(8px);
}
</style>
