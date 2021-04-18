import axios from 'axios';

import { language } from './index';
import ConstantApi from '../constants/Api';

const searchUrl = '/search/movie';

const searchMovie = (searchQuery) => {
  const attributes = `&language=${language}&page=1&query=${encodeURIComponent(searchQuery)}`

  return axios.get(`${searchUrl}?${ConstantApi.api_key}${attributes}`)
}

//export const URL_DETAIL = 'https://api.themoviedb.org/3/movie/';
//export const URL_SEARCH = 'https://api.themoviedb.org/3/search/movie?query=';
//export const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';
//export const API_KEY_ALT = '&api_key=a2df3d1a7611194432bbdf1fc80540f2';


export {
  searchMovie
}