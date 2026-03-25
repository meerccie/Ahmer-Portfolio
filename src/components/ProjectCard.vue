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

    <div class="flex flex-1 flex-col p-6 md:p-8">
      <div class="flex justify-between items-start mb-3">
        <h3
          class="text-xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors"
        >
          {{ project.title }}
        </h3>
        <span class="text-[10px] font-black uppercase tracking-widest text-emerald-500/50">
          {{ project.category }}
        </span>
      </div>

      <p class="flex-1 text-sm leading-relaxed text-slate-400 font-medium">
        {{ project.description }}
      </p>

      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="rounded-md bg-emerald-500/5 border border-emerald-500/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-emerald-500/80"
        >
          {{ tech }}
        </span>
      </div>

      <div class="mt-8 flex items-center justify-between border-t border-white/5 pt-5">
        <div class="flex gap-6">
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            class="text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            class="inline-flex items-center text-[11px] font-black uppercase tracking-widest text-emerald-500 hover:text-emerald-300 transition-colors"
          >
            Live Demo
            <span class="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
