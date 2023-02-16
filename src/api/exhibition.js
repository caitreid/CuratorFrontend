import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllExhibitions = () => {
    return axios(`${apiUrl}/exhibitions`);
   
  };
  