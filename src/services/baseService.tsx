/* eslint-disable prettier/prettier */
import axios from 'axios';

//BASE_URL API
const BASE_URL = 'https://api.themoviedb.org/3/';

export const doGet = (param: string) => {
  return axios({
    method: 'get',
    url: BASE_URL + param,
  })
    .then(response => {
      return {
        statusCode: response.status,
        data: response.data,
      };
    })
    .catch(error => {
      return {
        statusCode: error.response.data.status_code,
        data: error.response.data,
      };
    });
};
