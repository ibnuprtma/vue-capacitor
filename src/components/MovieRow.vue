<script setup>
import { getImageUrl } from '../services/movieService';

const props = defineProps({
  title: String,
  movies: Array,
  isLarge: Boolean
});
</script>

<template>
  <div class="ml-4 md:ml-12 my-8">
    <h2 class="text-white text-xl md:text-2xl font-bold mb-4">{{ title }}</h2>
    
    <div class="flex space-x-4 overflow-x-scroll no-scrollbar p-2">
      <div 
        v-for="movie in movies" 
        :key="movie.id"
        class="flex-none transition-transform duration-300 hover:scale-110 cursor-pointer"
        :class="isLarge ? 'w-[160px] md:w-[200px]' : 'w-[200px] md:w-[280px]'"
      >
        <img 
          :src="getImageUrl(isLarge ? movie.poster_path : movie.backdrop_path, !isLarge)" 
          :alt="movie.title"
          class="rounded object-cover w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>
