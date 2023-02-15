import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllDepartments = () => {
    return axios (`${apiUrl}/departments`);
   
  };
  