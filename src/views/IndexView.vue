<script setup lang="ts">
import { myProfile, experiences } from '@/data/portfolioData'
import { highlightTech, formatBio } from '@/utils/highlighter' // Import the helpers
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  ViFileTypeFlutter,
  ViFileTypeReactjs,
  ViFileTypeVue,
  ViFileTypeMysql,
  SiLaravel,
  SiPostgresql,
  SiPhp,
} from 'oh-vue-icons/icons'

addIcons(
  ViFileTypeFlutter,
  ViFileTypeReactjs,
  ViFileTypeVue,
  ViFileTypeMysql,
  SiLaravel,
  SiPostgresql,
  SiPhp,
)

const techs = [
  { name: 'Flutter', icon: 'vi-file-type-flutter' },
  { name: 'React', icon: 'vi-file-type-reactjs' },
  { name: 'Vue.js', icon: 'vi-file-type-vue' },
  { name: 'Laravel', icon: 'si-laravel' },
  { name: 'Postgres', icon: 'si-postgresql' },
  { name: 'Eloquent ORM', icon: 'si-php' },
  { name: 'MySQL', icon: 'vi-file-type-mysql' },
]
</script>

<template>
  <div class="relative z-10 flex flex-col items-center w-full">
    <section class="max-w-5xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <div class="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
          <div
            class="inline-block px-3 py-1 mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
          >
            {{ myProfile.title }}
          </div>

          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1] mb-6"
          >
            Hey <span class="text-emerald-500">There!</span>
          </h1>

          <div
            class="space-y-4 text-slate-400 text-sm md:text-base leading-relaxed font-medium mb-8 max-w-xl"
          >
            <p v-html="'I\'m ' + formatBio(myProfile.name, myProfile.bio)"></p>

            <p class="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black">
              {{ myProfile.freelance }} for Projects
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <router-link
              to="/projects"
              class="px-8 py-3 bg-emerald-500 text-slate-950 rounded-lg font-black text-[11px] uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/10 text-center"
            >
              View Projects
            </router-link>
            <router-link
              to="/connect"
              class="px-8 py-3 border border-slate-700 text-white rounded-lg font-black text-[11px] uppercase tracking-widest hover:bg-white/5 transition-all text-center"
            >
              Message me
            </router-link>
          </div>
        </div>

        <div class="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
          <div class="relative group w-full max-w-[240px] md:max-w-[260px]">
            <div class="absolute -inset-2 border border-emerald-500/10 rounded-[1rem] z-0"></div>
            <div
              class="relative z-10 w-full aspect-[4/5] overflow-hidden rounded-[0.8rem] bg-slate-900 border border-white/5 shadow-xl"
            >
              <img
                :src="myProfile.imageUrl"
                :alt="myProfile.name"
                class="w-full h-full object-cover grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full border-y border-white/5 bg-white/[0.01] py-12">
      <div
        class="max-w-5xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 md:gap-20"
      >
        <div v-for="tech in techs" :key="tech.name" class="flex flex-col items-center group/icon">
          <OhVueIcon
            :name="tech.icon"
            class="w-10 h-10 md:w-12 md:h-12 opacity-100 md:opacity-40 group-hover/icon:opacity-100 md:group-hover/icon:scale-110 transition-all duration-300"
          />
          <span
            class="text-[9px] font-black tracking-widest text-emerald-400 md:text-slate-500 mt-3 uppercase group-hover/icon:text-emerald-400 transition-colors"
          >
            {{ tech.name }}
          </span>
        </div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-6 py-20 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div class="lg:col-span-4">
          <span class="text-emerald-500 font-black uppercase tracking-[0.3em] text-[10px]"
            >What I've Been Up To</span
          >
          <h2 class="text-3xl md:text-5xl font-black tracking-tighter text-white mt-3">
            Experience
          </h2>
        </div>
        <div
          class="lg:col-span-8 relative border-l border-emerald-500/10 ml-3 lg:ml-0 pl-8 space-y-12"
        >
          <div v-for="item in experiences" :key="item.id" class="relative">
            <div
              class="absolute -left-[36.5px] top-1.5 w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"
            ></div>
            <span class="text-emerald-500 font-black text-[10px] uppercase tracking-widest block">
              {{ item.dateRange }}
            </span>
            <h3 class="text-lg md:text-xl font-black text-white mt-1 uppercase">
              {{ item.title }}
            </h3>
            <p
              class="text-slate-400 mt-3 text-sm font-medium leading-relaxed whitespace-pre-line"
              v-html="highlightTech(item.description)"
            ></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
