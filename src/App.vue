<script setup lang="ts">
import AppNavbar from './components/AppNavBar.vue'
import AppFooter from './components/AppFooter.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div
    class="dark min-h-screen bg-background text-foreground selection:bg-emerald-500/30 overflow-x-hidden"
  >
    <div class="fixed inset-0 z-0 pointer-events-none">
      <img
        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80"
        class="w-full h-full object-cover opacity-10 grayscale"
        alt="Background"
      />
      <div
        class="absolute inset-0 bg-linear-to-b from-transparent via-background/70 to-background"
      ></div>
    </div>

    <div class="relative z-10 flex flex-col min-h-screen">
      <AppNavbar />

      <main class="flex-grow">
        <router-view v-slot="{ Component }">
          <transition name="fade-slide" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>

      <AppFooter />
    </div>
  </div>
</template>

<style>
/* Transition styles for the fade-slide effect */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
