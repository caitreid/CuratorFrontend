// import apiUrl from '../apiConfig'
// import apiArtUrl from '../apiConfigArt'
import axios from 'axios'

// READ -> Index
// const defaultPic = { url: 'https://en.wikipedia.org/wiki/Five-pointed_star#/media/File:Five-pointed_star.svg'}
const defaultPic = { url: 'public/dickens-lin-zOkAWTyxO60-unsplash.jpg'}

export const getArtworks = (limit, id) => {
    const url = `https://openaccess-api.clevelandart.org/api/artworks`
    const params = {
            id: id,
            limit: limit,
            skip: 18,
            has_image: 1
        };
        return axios(url, {params})
        // const resp = axios(url, {params})
        .then((resp) => {
            console.log('this is resp', resp)
            const artworks = resp.data.data.map((artwork) => ({
                id: artwork.id,
                date: artwork.creation_date,
                title: artwork.title,
                department: artwork.department,
                desc: artwork.wall_description,
                dims: artwork.measurements,
                artist: artwork.creators.description,
                type: artwork.type,
//ternary
                img: artwork.images.web ? artwork.images.web : defaultPic

            }));
            return { artworks };
        })
        .catch((error) => {
            console.log("Error getting artworks", error);
            throw error;
        });
}

