<script setup lang="ts">
import type { Project } from '@/types/project'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div
    class="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/30 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)]"
  >
    <div
      class="relative overflow-hidden aspect-video flex items-center justify-center bg-slate-900/50 border-b border-white/5"
    >
      <img
        :src="project.imageUrl"
        :alt="project.title"
        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-60"
      ></div>
    </div>

    <div class="flex flex-1 flex-col p-6">
      <div class="flex justify-between items-start mb-3">
        <h3
          class="text-lg font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors"
        >
          {{ project.title }}
        </h3>
        <span class="text-[9px] font-black uppercase tracking-widest text-emerald-500/50 mt-1">
          {{ project.category }}
        </span>
      </div>

      <p class="flex-1 text-xs leading-relaxed text-slate-400 font-medium">
        {{ project.description }}
      </p>

      <div class="mt-4 flex flex-wrap gap-1.5">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="rounded bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-emerald-500/80"
        >
          {{ tech }}
        </span>
      </div>

      <div class="mt-6 flex items-center gap-6 border-t border-white/5 pt-4">
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-slate-500 transition-colors hover:text-white shrink-0"
        >
          GithubRepo
          <span class="ml-1.5 opacity-50 group-hover:translate-x-0.5 transition-transform inline-block">↗</span>
        </a>

        <a
          v-if="project.liveDemoUrl"
          :href="project.liveDemoUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-emerald-500 transition-all hover:text-emerald-400 shrink-0"
        >
          <span class="relative flex h-1.5 w-1.5 mr-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          Live Demo
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles for custom behaviors if needed */
.group:hover .group-hover\:translate-x-0\.5 {
  transform: translateX(2px);
}
</style>