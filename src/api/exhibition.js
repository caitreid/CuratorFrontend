import apiUrl from '../apiConfig'
import axios from 'axios'

// READ show ALL exhibitions
export const getAllExhibitions = () => {
    return axios(`${apiUrl}/exhibitions`);

}


// READ -- show ONE exhibition page?
export const getOneExhibition = (id) => {
  return axios(`${apiUrl}/exhibitions/${id}`)
}



// CREATE - create a new exhibition

export const createExhibition = (user, newExhibition) => {
    console.log('this is the new user ', user)
    console.log('this is the new exhibition ', newExhibition)
    return axios({
        url: `${apiUrl}/exhibitions`,
        method: 'POST',
        headers: {
          Authorization: `Token token=${user.token}`
        },
        data: { exhibition: newExhibition}
    })
}

// UPDATE - update a current user's exhibition

export const updateExhibition = (user, updatedExhibition) => {
  return axios({
    // not sure if this is dot ID or not
    url: `${apiUrl}/exhibitions/${updatedExhibition._id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${user.token}`
    },
    data: { exhibition: updatedExhibition }
  })
}

// DELETE - delete an exhibition 


export const removeExhibition = (user, exhibitionId) => {
  return axios({
    url: `${apiUrl}/exhibitions/${exhibitionId}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${user.token}`
    }
  })
}