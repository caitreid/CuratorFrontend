import apiUrl from '../apiConfig'
import axios from 'axios'


export const getAllExhibitions = () => {
    return axios(`${apiUrl}/exhibitions`);

}

export const getOneExhibitionArtworks = () => {
  return axios(`${apiUrl}/exhibitions`);

}


  
// READ -- show My exhibitions page?

// READ -- show ONE exhibition page?
export const getOneExhibition = (id) => {
  console.log('this is the new exhibition ', id)
  return axios(`${apiUrl}/exhibitions/${id}`)
}
// CREATE - create a new exhibition

export const createExhibition = (user, newExhibition) => {
    console.log('this is the new user ', user)
    console.log('this is the new exhibition ', newExhibition)
    return axios({
        //do we want to show this on main exhibition page? AND on the user's own page too?

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
    url: `${apiUrl}/exhibitions/${updatedExhibition.id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${user.token}`
    },
    data: { exhibition: updatedExhibition }
  })
}

// DELETE - delete an exhibition 
// Need a button on the index exhibition page

export const removeExhibition = (user, exhibitionId) => {
  return axios({
    url: `${apiUrl}/exhibitions/${exhibitionId}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${user.token}`
    }
  })
}