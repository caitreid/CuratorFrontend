import apiUrl from '../apiConfig'
import axios from 'axios'

// READ -> Index
export const getAllDepartments = () => {
    return axios(`${apiUrl}/departments`)
   
  }
  
// READ -> Show one department
export const getOneDepartment = async (id) => {
  return await axios(`${apiUrl}/departments/${id}`)
}

// axios call to clevelandArt API
// add department title into param from button value in IndexDeparments?
// then const searchTitle = title.split(' ').join('%20')?
export const getOneDepartmentArtworks = async(limit, name) => {
  const url = `https://openaccess-api.clevelandart.org/api/artworks`
    const params = {
      department: `${name}`,
      limit: limit,
        has_image: 1
    }
  return await axios(url, {params})
    .then((resp) => {
        const artworks = resp.data.data.map((artwork) => ({
          id: artwork.id,
          date: artwork.creation_date,
          title: artwork.title,
          department: artwork.department,
          desc: artwork.wall_description,
          dims: artwork.measurements,
          artist: artwork.creators.description,
          type: artwork.type,
          img: artwork.images.web.url
        }))
        return { artworks };
    })
    .catch((error) => {
      console.log("Error getting artworks", error);
      throw error;
    })
}