<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
</script>

<template>
  <header class="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/60 backdrop-blur-md">
    <div class="flex h-16 items-center justify-between px-6 md:px-12 w-full">
      <div class="text-xl font-black tracking-tighter text-white select-none">
        Portfolio<span class="text-emerald-500">.</span>
      </div>

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
