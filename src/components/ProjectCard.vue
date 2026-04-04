<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '@/types/project'
import ProjectModal from './ProjectModal.vue'

defineProps<{
  project: Project
}>()

const isModalOpen = ref(false)
</script>

<template>
  <div
    @click="isModalOpen = true"
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

    <ProjectModal 
      :project="project" 
      :is-open="isModalOpen" 
      @close="isModalOpen = false" 
    />
  </div>
</template>