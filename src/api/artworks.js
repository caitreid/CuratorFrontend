// import apiUrl from '../apiConfig'
// import apiArtUrl from '../apiConfigArt'
import axios from 'axios'

// READ -> Index

export const getArtworks = (limit, id) => {
    const url = `https://openaccess-api.clevelandart.org/api/artworks`
    const params = {
            id: id,
            limit: limit,
            has_image: 1
        };
    return axios(url, {params})
    // const resp = axios(url, {params})
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
            }));
            return { artworks };
        })
        .catch((error) => {
            console.log("Error getting artworks", error);
            throw error;
        });
}

