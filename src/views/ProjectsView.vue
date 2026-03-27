<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '@/data/portfolioData'
import ProjectCard from '@/components/ProjectCard.vue'
import type { ProjectCategory } from '@/types/project'

const selectedCategory = ref<'All' | ProjectCategory>('All')
const categories: ('All' | ProjectCategory)[] = ['All', 'Web', 'Mobile']

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') return projects
  return projects.filter((p) => p.category === selectedCategory.value)
})
</script>

<template>
  <main class="relative z-10 max-w-7xl mx-auto px-6 py-32 min-h-screen">
    <header class="text-center mb-16">
      <span class="text-emerald-500 font-black uppercase tracking-[0.3em] text-[10px]"
        >Showcase</span
      >
      <h1
        class="text-5xl md:text-7xl font-black tracking-tighter mt-4 mb-6 text-white text-balance"
      >
        Creative <span class="text-emerald-500">Works.</span>
      </h1>
    </header>

    <div class="flex justify-center mb-16">
      <div
        class="inline-flex p-1 bg-white/[0.03] border border-white/5 rounded-xl backdrop-blur-md"
      >
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          :class="[
            'px-8 py-2.5 text-[11px] font-black uppercase tracking-widest transition-all duration-500 rounded-lg relative',
            selectedCategory === cat ? 'text-slate-950 z-10' : 'text-slate-500 hover:text-white',
          ]"
        >
          <div
            v-if="selectedCategory === cat"
            class="absolute inset-0 bg-emerald-500 rounded-lg -z-10 shadow-[0_0_25px_rgba(16,185,129,0.3)]"
          ></div>
          {{ cat }}
        </button>
      </div>
    </div>

    <section class="relative">
      <TransitionGroup
        tag="div"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        move-class="transition-all duration-500 ease-in-out"
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in absolute pointer-events-none w-full max-w-[calc(100%-3rem)] md:max-w-[calc(50%-2rem)] lg:max-w-[calc(33.333%-2.5rem)]"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-for="project in filteredProjects" :key="project.id" class="w-full h-full">
          <ProjectCard :project="project" />
        </div>
      </TransitionGroup>

      <div v-if="filteredProjects.length === 0" class="text-center py-20 w-full">
        <p class="text-slate-500 text-[11px] uppercase tracking-[0.2em] font-black opacity-30">
          No projects found in this category.
        </p>
      </div>
    </section>
  </main>
</template>
