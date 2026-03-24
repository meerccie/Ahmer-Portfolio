<script setup lang="ts">
import type { Project } from '@/types/project'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div
    class="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800"
  >
    <div
      class="overflow-hidden aspect-video flex items-center justify-center bg-slate-50 dark:bg-slate-900/50"
    >
      <img
        :src="project.imageUrl"
        :alt="project.title"
        class="h-24 w-auto transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    <div class="flex flex-1 flex-col p-6">
      <h3 class="text-xl font-bold text-slate-900 dark:text-white">
        {{ project.title }}
      </h3>

      <p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {{ project.description }}
      </p>

      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-300"
        >
          {{ tech }}
        </span>
      </div>

      <div
        class="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-700"
      >
        <div class="flex gap-4">
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            class="text-sm font-medium text-slate-600 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400"
          >
            GitHub
          </a>
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            class="inline-flex items-center text-sm font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            Live Demo
            <span class="ml-1">→</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
