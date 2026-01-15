<script setup>
import { ref, onMounted } from 'vue';
import { getImageUrl } from '../services/movieService';

const props = defineProps({
  movie: Object
});
</script>

<template>
  <header 
    v-if="movie"
    class="relative h-[65vh] md:h-[80vh] bg-cover bg-center object-contain"
    :style="`background-image: url('${getImageUrl(movie.backdrop_path, true)}');`"
  >
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-netflix-dark"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-netflix-dark/80 via-transparent to-transparent"></div>

    <!-- Content -->
    <div class="absolute bottom-[20%] left-4 md:left-12 space-y-4 max-w-xl">
      <h1 class="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md">
        {{ movie.title }}
      </h1>
      <p class="text-white text-sm md:text-lg drop-shadow-md line-clamp-3">
        {{ movie.overview }}
      </p>
      
      <div class="flex space-x-3 mt-4">
        <button class="flex items-center space-x-2 bg-white text-black px-6 py-2 rounded font-bold hover:bg-gray-200 transition">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
          </svg>
          <span>Play</span>
        </button>
        <button class="flex items-center space-x-2 bg-gray-500/70 text-white px-6 py-2 rounded font-bold hover:bg-gray-500/50 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <span>More Info</span>
        </button>
      </div>
    </div>
  </header>
  <div v-else class="h-[60vh] flex items-center justify-center text-white">
      Loading...
  </div>
</template>
