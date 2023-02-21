import apiUrl from '../apiConfig'
import axios from 'axios'

// Tap the API to return artworks
const defaultPic = { url: 'https://en.wikipedia.org/wiki/Five-pointed_star#/media/File:Five-pointed_star.svg'}
// const defaultPic = { url: 'public/dickens-lin-zOkAWTyxO60-unsplash.jpg'}

export const getArtworks = async (limit, id) => {
    const url = `https://openaccess-api.clevelandart.org/api/artworks`
    const params = {
            id: id,
            limit: limit,
            skip: 18,
            has_image: 1
        };
        return await axios(url, {params})
        // const resp = axios(url, {params})
        .then((resp) => {
            console.log('this is resp', resp)
            const artworks = resp.data.data.map((artwork) => ({
                id: artwork.id,
                title: artwork.title,
                date: artwork.creation_date,
                desc: artwork.wall_description,
                artist: artwork.creators.description,
                dims: artwork.measurements,
                type: artwork.type,
                department: artwork.department,
                img: artwork.images.web ? artwork.images.web['url'] : defaultPic.url
            }));
            return { artworks };
        })
        .catch((error) => {
            console.log("Error getting artworks", error);
            throw error;
        });
}

// Show one artwork
export const getOneArtwork = async (id) => {
    const url = `https://openaccess-api.clevelandart.org/api/artworks/${id}`
        return await axios(url)
        .then((res) => {
            console.log('this is res in getOneArtwork ==============\n', res)
            const artwork = {
                id: res.data.data.id,
                title: res.data.data.title,
                date: res.data.data.creation_date,
                desc: res.data.data.wall_description,
                artist: res.data.data.creators.description,
                dims: res.data.data.measurements,
                type: res.data.data.type,
                department: res.data.data.department,
                img: res.data.data.images.web ? res.data.data.images.web['url'] : defaultPic.url
            }
            console.log('this is the artwork ============== \n', artwork)
            return {artwork}

        })
        .catch(err => {
            console.log('this is the error in getOneArtwork', err)
        })
}

// Add Artworks to Exhibitions
//    /artworks/:exhibitionId
export const addArtwork = (exhibitionId, newArtwork) => {

    console.log('AXIOS newArtwork: ', newArtwork)
    return axios({
        url: `${apiUrl}/artworks/${exhibitionId}`,
        method: 'POST',
        data: { artworks: newArtwork }
    })
}

