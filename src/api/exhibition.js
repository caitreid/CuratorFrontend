import apiUrl from '../apiConfig'
import axios from 'axios'


export const getAllExhibitions = () => {
    return axios(`${apiUrl}/exhibitions`);

   
  };
  

// READ -- show ONE artwork page?

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