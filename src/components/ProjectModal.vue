<script setup lang="ts">
import { watch, onUnmounted } from 'vue'
import type { Project } from '@/types/project'

const props = defineProps<{
  project: Project | null
  isOpen: boolean
}>()

const emit = defineEmits(['close'])

const handleEsc = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close')
}

// Global Scroll Lock & Key Listeners
watch(() => props.isOpen, (open) => {
  if (open) {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEsc)
  } else {
    document.body.style.overflow = ''
    window.removeEventListener('keydown', handleEsc)
  }
})

// Cleanup if component is destroyed while open
onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleEsc)
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="isOpen && project" class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
        <div @click="emit('close')" class="fixed inset-0 bg-slate-950/90 backdrop-blur-xl cursor-zoom-out"></div>

        <div 
          @click.stop 
          class="relative w-full max-w-2xl bg-[#080808] border border-white/10 rounded-3xl shadow-[0_0_80px_rgba(16,185,129,0.15)] flex flex-col max-h-[90vh]"
        >
          <button 
            @click="emit('close')" 
            class="absolute top-6 right-6 z-50 text-slate-500 hover:text-white transition-colors p-2 bg-[#080808]/50 backdrop-blur-md rounded-full border border-white/5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <div class="overflow-y-auto p-8 md:p-12 custom-scrollbar">
            <div class="flex items-center gap-3 mb-6">
              <span class="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">
                Project Insight
              </span>
            </div>

            <h2 class="text-3xl md:text-4xl font-black text-white mb-6 tracking-tighter italic">
              {{ project.title }}
            </h2>
            
            <div class="prose prose-invert max-w-none mb-8">
              <p class="text-base leading-relaxed text-slate-300 font-medium whitespace-pre-line">
                {{ project.description }}
              </p>
            </div>

            <div class="flex flex-wrap gap-2 mb-10">
              <span v-for="tech in project.technologies" :key="tech" class="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                {{ tech }}
              </span>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-6 pt-8 border-t border-white/5">
              <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="w-full sm:w-auto justify-center inline-flex items-center text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-white">
                Source Code ↗
              </a>

              <a v-if="project.liveDemoUrl" :href="project.liveDemoUrl" target="_blank" class="w-full sm:w-auto justify-center inline-flex items-center px-8 py-4 rounded-xl bg-emerald-500 text-[11px] font-black uppercase tracking-[0.2em] text-slate-950 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95">
                Launch Application
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(16, 185, 129, 0.2);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(16, 185, 129, 0.4);
}
</style>