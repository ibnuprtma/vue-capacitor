<script setup>
import { ref } from 'vue';
import { getImageUrl } from '../services/movieService';

const props = defineProps({
  title: String,
  movies: Array,
  isLarge: Boolean
});

const rowRef = ref(null);
const translateX = ref(0);
const isDragging = ref(false);
const startX = ref(0);
const currentScrollLeft = ref(0);

// Helper for resistance curve
function easeOutQuad(x) {
  return 1 - (1 - x) * (1 - x);
}

const handleTouchStart = (e) => {
  if (!rowRef.value) return;
  isDragging.value = true;
  startX.value = e.touches[0].clientX;
  currentScrollLeft.value = rowRef.value.scrollLeft;
  // Disable transition during drag
};

const handleTouchMove = (e) => {
  if (!isDragging.value || !rowRef.value) return;
  
  const x = e.touches[0].clientX;
  const walk = x - startX.value;
  const maxScroll = rowRef.value.scrollWidth - rowRef.value.clientWidth;
  
  // Left Edge Bounce
  if (rowRef.value.scrollLeft <= 0 && walk > 0) {
      // Resistance
      translateX.value = Math.min(walk * 0.4, 100); 
  } 
  // Right Edge Bounce
  else if (rowRef.value.scrollLeft >= maxScroll - 1 && walk < 0) {
      translateX.value = Math.max(walk * 0.4, -100);
  }
};

const handleTouchEnd = () => {
  isDragging.value = false;
  // Bounce back
  translateX.value = 0;
};
</script>

<template>
  <div class="ml-4 md:ml-12 my-8">
    <h2 class="text-white text-xl md:text-2xl font-bold mb-4">{{ title }}</h2>
    
    <div 
       class="relative overflow-hidden p-2 -m-2"
    >
        <div 
          ref="rowRef"
          class="flex space-x-4 overflow-x-scroll no-scrollbar touch-pan-x"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          :style="{ 
              transform: `translateX(${translateX}px)`,
              transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)'
          }"
        >
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
              draggable="false"
            />
          </div>
        </div>
    </div>
  </div>
</template>
