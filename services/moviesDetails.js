import axios from 'axios';

import { language } from './index';
import ConstantApi from '../constants/Api';

const movieDetailsUrl = '/movie/{movie_id}';

const movieImageUrl = '/movie/{movie_id}/images';

const movieImageUrl = (searchQuery) => {

}

const movieDetalsUrl = (searchQuery) => {

}

/*
const searchMovie = (searchQuery) => {
    const attributes = `&language=${language}&page=1&query=${encodeURIComponent(searchQuery)}`
  
    return axios.get(`${searchUrl}?${ConstantApi.api_key}${attributes}`)
  }
  
  export {
    searchMovie
  }  /*}