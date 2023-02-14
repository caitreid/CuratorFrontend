// import apiUrl from '../apiConfig'
import apiArtUrl from '../apiConfigArt'
import axios from 'axios'

// READ -> Index
// export const getAllArtworks = () => {
//     return axios(`https://openaccess-api.clevelandart.org/api/artworks/?limit=5`)
// }
// export const getAllArtworks = () => {
// 	return axios({
// 		method: 'GET',
// 		url: apiArtUrl + '/artworks/?limit=5',
// 		headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Content-Type': 'application/json',
//         }
// 	})
// }

export const getAllArtworks = (keyword, skip, limit) => {
    const url = `https://openaccess-api.clevelandart.org/api/artworks`
    const params = {
            q: keyword,
            skip: skip,
            limit: limit,
            has_image: 1
        };
    return axios(url, {params})
    // const resp = axios(url, {params})
        .then((resp) => {
            const artworks = resp.data.data.map((artwork) => ({
            // for (const artwork of resp.data.data) {
                //const tombstone = artwork.tombstone;
                id: artwork.id,
                title: artwork.title,
                department: artwork.department,
                type: artwork.type

            }));
            return { artworks };
          })
    .catch((error) => {
        console.log("Error getting artworks", error);
        throw error;
      });
}
getAllArtworks("monet", 0, 5);
