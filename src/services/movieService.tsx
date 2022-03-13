/* eslint-disable prettier/prettier */
import * as baseService from './baseService';

//mY Api Key
const API_KEY = 'be7ddc7074fe58edbe5eb7645a53072d';

export const getNowPlaying = (page: any) =>
  baseService.doGet(
    `movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`,
  );
