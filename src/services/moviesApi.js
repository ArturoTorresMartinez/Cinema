import api from './api';
import constants from './constants';
import I18n from '../utils/i18n';

const getMovies = (type, page) => {
  return api.request_get(constants.MOVIE + type, {
    page: page ? page : 1,
    language: I18n.t('lang'),
  });
};

const getMovie = (movieId) => {
  return api.request_get(constants.MOVIE + movieId, {
    language: I18n.t('lang'),
  });
};

export default {
  getMovies,
  getMovie,
};
