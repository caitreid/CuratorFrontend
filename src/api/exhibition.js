import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllExhibition = async () => {
    return axios (`${apiUrl}/exhibition`);
   
  };
  