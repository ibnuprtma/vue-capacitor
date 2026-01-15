import axios from 'axios';

const API_URL = 'https://api.tvmaze.com/shows';

// Helper to strip HTML tags from summary
const stripHtml = (html) => {
   if (!html) return '';
   return html.replace(/<[^>]*>?/gm, '');
};

const mapShowToMovie = (show) => {
  return {
    id: show.id,
    title: show.name,
    overview: stripHtml(show.summary),
    poster_path: show.image?.medium || '',
    backdrop_path: show.image?.original || '', // TVMaze usually gives portrait originals, we'll use it for now
    vote_average: show.rating?.average || 0,
    genres: show.genres || []
  };
};

export const getImageUrl = (path, isBackdrop = false) => {
  // If path is a full URL (which it is from our map), just return it.
  // Otherwise return placeholder.
  if (path && path.startsWith('http')) return path;
  return 'https://via.placeholder.com/500x750?text=No+Image';
};

export default {
  async getShows() {
    try {
      const response = await axios.get(API_URL);
      const data = response.data; // Array of shows
      return data.map(mapShowToMovie);
    } catch (error) {
      console.error("Error fetching shows:", error);
      return [];
    }
  },

  async getTrending() {
    // TVMaze doesn't have a "trending" endpoint for free easily,
    // so we just take the first 20 shows as "trending".
    const shows = await this.getShows();
    return shows.slice(0, 20);
  },

  async getTopRated() {
    // Filter by rating > 8
    const shows = await this.getShows();
    return shows.filter(m => m.vote_average >= 8.5).sort((a, b) => b.vote_average - a.vote_average).slice(0, 20);
  },

  async getAction() {
     // Filter by Genre "Action"
     const shows = await this.getShows();
     return shows.filter(m => m.genres.includes('Action') || m.genres.includes('Adventure')).slice(0, 20);
  },
  
  async getExtras() {
      // Just some random specific genre or high rated
      const shows = await this.getShows();
      return shows.filter(m => m.genres.includes('Drama')).slice(0, 20);
  }
};
