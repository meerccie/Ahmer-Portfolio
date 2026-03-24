<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Project } from '@/types/project'
import ProjectCard from '@/components/ProjectCard.vue'

const allProjects = ref<Project[]>([
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A high-performance admin panel built with Vue 3 and Pinia.',
    technologies: ['Vue', 'TypeScript', 'Tailwind'],
    imageUrl: '/images/profile.jpg', // Simplified path
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  // Add more projects here to see the grid in action
])

const selectedTech = ref<string>('All')
const categories = ['All', 'Vue', 'TypeScript', 'Node.js']

const filteredProjects = computed(() => {
  if (selectedTech.value === 'All') return allProjects.value
  return allProjects.value.filter((p) => p.technologies.includes(selectedTech.value))
})
</script>

<template>
  <main
    class="max-w-7xl mx-auto px-6 py-12 min-h-screen flex flex-col items-center justify-center text-center"
  >
    <header class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        My Creative Work
      </h1>
      <p class="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        A collection of projects I've built using modern web technologies.
      </p>
    </header>

    <div class="flex flex-wrap justify-center gap-3 mb-12">
      <button
        v-for="tech in categories"
        :key="tech"
        @click="selectedTech = tech"
        :class="[
          'px-6 py-2 rounded-full border transition-all duration-300 font-medium',
          selectedTech === tech
            ? 'bg-emerald-500 border-emerald-500 text-white shadow-lg shadow-emerald-500/30'
            : 'border-slate-300 text-slate-600 hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-700 dark:text-slate-400',
        ]"
      >
        {{ tech }}
      </button>
    </div>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <TransitionGroup name="list">
        <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
        <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
        <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
      </TransitionGroup>
    </section>
  </main>
</template>
