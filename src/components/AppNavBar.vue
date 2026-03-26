<script setup lang="ts">
import { ref } from 'vue'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

// State to track if the mobile menu is open
const isMobileMenuOpen = ref(false)

// Function to close the menu when a link is clicked
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/60 backdrop-blur-md">
    <div class="flex h-16 items-center justify-between px-6 md:px-12 w-full">
      <div class="text-xl font-black tracking-tighter text-white select-none">
        Portfolio<span class="text-emerald-500">.</span>
      </div>

      <div class="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList class="flex gap-8 md:gap-12">
            <NavigationMenuItem>
              <router-link to="/" v-slot="{ isExactActive }">
                <NavigationMenuLink
                  :active="isExactActive"
                  class="bg-transparent hover:bg-transparent p-0 text-[11px] uppercase tracking-[0.2em] font-black transition-all duration-300 hover:text-emerald-400"
                  :class="isExactActive ? 'text-emerald-500' : 'text-slate-400'"
                >
                  Index
                </NavigationMenuLink>
              </router-link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <router-link to="/projects" v-slot="{ isActive }">
                <NavigationMenuLink
                  :active="isActive"
                  class="bg-transparent hover:bg-transparent p-0 text-[11px] uppercase tracking-[0.2em] font-black transition-all duration-300 hover:text-emerald-400"
                  :class="isActive ? 'text-emerald-500' : 'text-slate-400'"
                >
                  Projects
                </NavigationMenuLink>
              </router-link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <router-link to="/connect" v-slot="{ isActive }">
                <NavigationMenuLink
                  :active="isActive"
                  class="bg-transparent hover:bg-transparent p-0 text-[11px] uppercase tracking-[0.2em] font-black transition-all duration-300 hover:text-emerald-400"
                  :class="isActive ? 'text-emerald-500' : 'text-slate-400'"
                >
                  Let's Connect
                </NavigationMenuLink>
              </router-link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
        aria-label="Toggle mobile menu"
      >
        <svg
          v-if="!isMobileMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-16 left-0 w-full bg-slate-950/95 border-b border-white/5 backdrop-blur-md shadow-2xl"
      >
        <nav class="flex flex-col px-6 py-8 gap-6">
          <router-link to="/" v-slot="{ isExactActive }" @click="closeMobileMenu">
            <span
              class="text-[12px] uppercase tracking-[0.2em] font-black transition-all duration-300 hover:text-emerald-400 block w-full"
              :class="isExactActive ? 'text-emerald-500' : 'text-slate-400'"
            >
              Index
            </span>
          </router-link>

          <router-link to="/projects" v-slot="{ isActive }" @click="closeMobileMenu">
            <span
              class="text-[12px] uppercase tracking-[0.2em] font-black transition-all duration-300 hover:text-emerald-400 block w-full"
              :class="isActive ? 'text-emerald-500' : 'text-slate-400'"
            >
              Projects
            </span>
          </router-link>

          <router-link to="/connect" v-slot="{ isActive }" @click="closeMobileMenu">
            <span
              class="text-[12px] uppercase tracking-[0.2em] font-black transition-all duration-300 hover:text-emerald-400 block w-full"
              :class="isActive ? 'text-emerald-500' : 'text-slate-400'"
            >
              Let's Connect
            </span>
          </router-link>
        </nav>
      </div>
    </transition>
  </header>
</template>

<style scoped>
/* Scoped reset to kill any leftover shadow or highlight from the UI library */
:deep([data-slot='navigation-menu-link']) {
  background-color: transparent !important;
  box-shadow: none !important;
  outline: none !important;
}
</style>
