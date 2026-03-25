<script setup lang="ts">
import { projects } from '@/data/portfolioData'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <main class="relative z-10 max-w-7xl mx-auto px-6 py-32 min-h-screen">
    <header class="text-center mb-20">
      <span class="text-emerald-500 font-black uppercase tracking-[0.3em] text-[10px]">
        Showcase
      </span>
      <h1 class="text-5xl md:text-7xl font-black tracking-tighter mt-4 mb-6 text-white">
        Creative <span class="text-emerald-500">Works.</span>
      </h1>
      <p class="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
        A collection of projects ranging from mobile applications to web-based systems, focusing on
        clean code and functional design.
      </p>
    </header>

    <section class="w-full">
      <TransitionGroup
        tag="div"
        name="project-list"
        class="flex flex-wrap justify-center gap-8 md:gap-10"
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="opacity-0 translate-y-10"
        enter-to-class="opacity-100 translate-y-0"
      >
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          class="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)] max-w-[400px] hover:-translate-y-2 transition-transform duration-300"
        />
      </TransitionGroup>
    </section>

    <div v-if="projects.length === 0" class="text-center py-32">
      <p class="text-slate-500 text-sm uppercase tracking-widest font-black">
        No projects to display yet.
      </p>
    </div>
  </main>
</template>

<style scoped>
.project-list-move {
  transition: all 0.5s ease;
}
</style>
