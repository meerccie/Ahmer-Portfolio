<script setup lang="ts">
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { SiFacebook, SiGithub, SiLinkedin, SiDiscord } from 'oh-vue-icons/icons'

// Adding icons for the footer
addIcons(SiFacebook, SiGithub, SiLinkedin, SiDiscord)

const currentYear = new Date().getFullYear()

const socials = [
  { name: 'Facebook', icon: 'si-facebook', link: 'YOUR_FACEBOOK_LINK' },
  { name: 'Github', icon: 'si-github', link: 'YOUR_GITHUB_LINK' },
  { name: 'LinkedIn', icon: 'si-linkedin', link: 'YOUR_LINKEDIN_LINK' },
  { name: 'Discord', icon: 'si-discord', link: 'YOUR_DISCORD_LINK' },
]
</script>

<template>
  <footer class="w-full border-t border-white/5 bg-slate-950/50 py-12 mt-auto">
    <div
      class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8"
    >
      <div class="text-center md:text-left">
        <p class="text-white font-black text-[10px] uppercase tracking-widest mb-2">Based in</p>
        <p class="text-slate-400 text-sm font-medium">Taguig City 1630, Philippines</p>
        <p class="text-slate-500 text-[10px] mt-4 font-bold uppercase tracking-tighter">
          © {{ currentYear }} Al Ahmer Rhoden M. Timpahan
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
