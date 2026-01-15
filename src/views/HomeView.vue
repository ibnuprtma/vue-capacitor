<script setup>
import { ref, onMounted } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import movieService from '../services/movieService';
import Navbar from '../components/Navbar.vue';
import Hero from '../components/Hero.vue';
import MovieRow from '../components/MovieRow.vue';

const featuredMovie = ref(null);
const trendingMovies = ref([]);
const topRatedMovies = ref([]);
const actionMovies = ref([]);
const originals = ref([]);

onMounted(async () => {
  // Fetch data
  const trends = await movieService.getTrending();
  const top = await movieService.getTopRated();
  const act = await movieService.getAction();
  const orig = await movieService.getExtras();

  trendingMovies.value = trends;
  topRatedMovies.value = top;
  actionMovies.value = act;
  originals.value = orig;

  // Set random featured movie
  if (orig.length > 0) {
      featuredMovie.value = orig[Math.floor(Math.random() * orig.length)];
  } else if (trends.length > 0) {
      featuredMovie.value = trends[0];
  }
});
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true" class="bg-netflix-dark">
      <div class="bg-netflix-dark min-h-screen text-white pb-20">
        <Navbar />
        
        <Hero :movie="featuredMovie" />

        <div class="-mt-24 relative z-10 pl-2">
           <!-- Rows -->
           <MovieRow title="Netflix Originals" :movies="originals" isLarge />
           <MovieRow title="Trending Now" :movies="trendingMovies" />
           <MovieRow title="Top Rated" :movies="topRatedMovies" />
           <MovieRow title="Action Thrillers" :movies="actionMovies" />
        </div>

        <!-- Footer -->
        <footer class="mt-20 text-center text-gray-500 text-sm pb-10">
           <p>Designed for learning purposes by Antigravity</p>
        </footer>
      </div>
    </ion-content>
  </ion-page>
</template>
