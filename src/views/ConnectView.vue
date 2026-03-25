<script setup lang="ts">
import { ref } from 'vue'

const formStatus = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

async function handleSubmit(event: Event) {
  const form = event.target as HTMLFormElement
  const data = new FormData(form)

  formStatus.value = 'sending'

  try {
    const response = await fetch('https://formspree.io/f/mjgpbjgj', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })

    if (response.ok) {
      formStatus.value = 'success'
      form.reset()
      setTimeout(() => {
        formStatus.value = 'idle'
      }, 5000)
    } else {
      formStatus.value = 'error'
    }
  } catch {
    formStatus.value = 'error'
  }
}
</script>

<template>
  <div class="relative z-10 flex flex-col items-center w-full min-h-[80vh] pt-32 pb-20">
    <section class="max-w-2xl mx-auto px-6 w-full">
      <div class="mb-10">
        <span class="text-emerald-500 font-black uppercase tracking-[0.3em] text-[10px]"
          >Contact</span
        >
        <h1 class="text-4xl md:text-5xl font-black tracking-tighter text-white mt-3">
          Let's <span class="text-emerald-500">Connect.</span>
        </h1>
      </div>

      <form
        @submit.prevent="handleSubmit"
        class="space-y-5 bg-white/[0.02] border border-white/5 p-6 md:p-10 rounded-2xl backdrop-blur-md"
      >
        <div class="space-y-2">
          <label class="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1"
            >Your Email</label
          >
          <input
            type="email"
            name="email"
            required
            placeholder="email@example.com"
            class="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
          />
        </div>

        <div class="space-y-2">
          <label class="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1"
            >Your Message</label
          >
          <textarea
            name="message"
            required
            rows="5"
            placeholder="How can I help you?"
            class="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          :disabled="formStatus === 'sending'"
          class="w-full py-4 bg-emerald-500 text-slate-950 rounded-lg font-black text-[11px] uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/10 disabled:opacity-50"
        >
          <span v-if="formStatus === 'idle'">Send Message</span>
          <span v-if="formStatus === 'sending'">Sending...</span>
          <span v-if="formStatus === 'success'">Message Sent!</span>
          <span v-if="formStatus === 'error'">Try Again</span>
        </button>

        <transition name="fade">
          <div
            v-if="formStatus === 'success'"
            class="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-center"
          >
            <p class="text-emerald-400 text-[11px] font-black uppercase tracking-widest">
              Message received! I'll be in touch.
            </p>
          </div>
        </transition>
      </form>

      <div class="mt-12 pt-8 border-t border-white/5 text-center">
        <p class="text-white font-black text-[10px] uppercase tracking-widest mb-2">
          Message me directly
        </p>
        <a
          href="mailto:ahmertimpahan297@gmail.com"
          class="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium"
        >
          ahmertimpahan297@gmail.com
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
