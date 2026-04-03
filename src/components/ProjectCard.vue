<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '@/types/project'

defineProps<{
  project: Project
}>()

// Changed from isHovered to isModalOpen
const isModalOpen = ref(false)

const toggleModal = () => {
  isModalOpen.value = !isModalOpen.value
}
</script>

<template>
  <div
    @click="toggleModal"
    class="group flex flex-col h-full cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/30 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)]"
  >
    <div class="relative overflow-hidden aspect-video flex items-center justify-center p-3 bg-slate-900/50 border-b border-white/5">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-950 to-slate-900 opacity-60"></div>
      <img
        :src="project.imageUrl"
        :alt="project.title"
        class="relative z-10 max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 shadow-xl rounded-md"
      />
      
      <div class="absolute inset-0 flex items-center justify-center bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span class="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-slate-950/80 px-3 py-1 rounded-full border border-emerald-500/20">View Details</span>
      </div>
    </div>

    <div class="flex flex-1 flex-col p-6">
      <div class="flex justify-between items-start mb-3">
        <h3 class="text-lg font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors">
          {{ project.title }}
        </h3>
        <span class="text-[9px] font-black uppercase tracking-widest text-emerald-500/50 mt-1">
          {{ project.category }}
        </span>
      </div>

      <p class="text-xs leading-relaxed text-slate-400 font-medium line-clamp-3 min-h-[3.6rem]">
        {{ project.description }}
      </p>

      <div class="mt-auto pt-6 flex flex-wrap gap-1.5">
        <span v-for="tech in project.technologies" :key="tech" class="rounded bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-emerald-500/80">
          {{ tech }}
        </span>
      </div>
    </div>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-if="isModalOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div @click.stop="toggleModal" class="absolute inset-0 bg-slate-950/90 backdrop-blur-xl cursor-zoom-out"></div>

          <div @click.stop class="relative w-full max-w-2xl bg-[#080808] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(16,185,129,0.15)]">
            
            <button 
              @click="toggleModal" 
              class="absolute top-6 right-6 z-20 text-slate-500 hover:text-white transition-colors p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div class="p-10 md:p-12">
              <div class="flex items-center gap-3 mb-6">
                <span class="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">
                  Project Insight
                </span>
              </div>

              <h2 class="text-3xl md:text-4xl font-black text-white mb-6 tracking-tighter">{{ project.title }}</h2>
              
              <div class="prose prose-invert max-w-none">
                <p class="text-base leading-relaxed text-slate-300 font-medium mb-8">
                  {{ project.description }}
                </p>
              </div>

              <div class="flex flex-wrap gap-2 mb-10">
                <span v-for="tech in project.technologies" :key="tech" class="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  {{ tech }}
                </span>
              </div>

              <div class="flex flex-col sm:flex-row items-center gap-6 pt-8 border-t border-white/5">
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  class="w-full sm:w-auto justify-center inline-flex items-center text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-white"
                >
                  Source Code ↗
                </a>

                <a
                  v-if="project.liveDemoUrl"
                  :href="project.liveDemoUrl"
                  target="_blank"
                  class="w-full sm:w-auto justify-center inline-flex items-center px-6 py-3 rounded-xl bg-emerald-500 text-[11px] font-black uppercase tracking-[0.2em] text-slate-950 transition-transform hover:scale-105 active:scale-95"
                >
                  Launch App
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>