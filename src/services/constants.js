const BASE_URL = 'https://api.themoviedb.org/3/';
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

const urls = {
  movie: {
    BASE: 'movie/',
    POPULAR: 'popular',
  },
};

export default {
  POPULAR_MOVIES: `${BASE_URL}${urls.movie.BASE}${urls.movie.POPULAR}`,
  MOVIE: `${BASE_URL}${urls.movie.BASE}`,
};
