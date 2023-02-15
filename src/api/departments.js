import apiUrl from '../apiConfig'
import axios from 'axios'

// READ -> Index
export const getAllDepartments = () => {
    return axios(`${apiUrl}/departments`)
   
  }
  
// READ -> Show one department
export const getOneDepartment = (id) => {
  return axios(`${apiUrl}/departments/${id}`)
}