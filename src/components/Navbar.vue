<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav 
    class="fixed top-0 w-full z-50 transition-colors duration-300 ease-in-out p-4 flex items-center justify-between"
    :class="{ 'bg-netflix-black': isScrolled, 'bg-gradient-to-b from-black/70 to-transparent': !isScrolled }"
  >
    <!-- Logo -->
    <div class="flex items-center">
       <h1 class="text-netflix-red text-2xl md:text-3xl font-bold uppercase tracking-tighter cursor-pointer">StartFlix</h1>
       <!-- Navigation Links (Desktop) -->
       <ul class="hidden md:flex ml-8 space-x-6 text-sm text-gray-300">
          <li class="hover:text-white cursor-pointer font-medium">Home</li>
          <li class="hover:text-white cursor-pointer font-medium">Series</li>
          <li class="hover:text-white cursor-pointer font-medium">Films</li>
          <li class="hover:text-white cursor-pointer font-medium">New & Popular</li>
       </ul>
    </div>

    <!-- Right Side -->
    <div class="flex items-center space-x-4">
      <button class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
      </button>
      <div class="w-8 h-8 bg-blue-600 rounded cursor-pointer"></div>
    </div>
  </nav>
</template>
