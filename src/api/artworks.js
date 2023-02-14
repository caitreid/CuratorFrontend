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

    const resp = axios(url, {params})
        // .then((resp) => {
        //     for (const artwork of resp.data.data) {
        //         // const tombstone = artwork.tombstone;
        //         const title = artwork.title;
        //         const image = artwork.images.web.url;

        //         console.log(`${title}\n${image}\n---`);
        //     }
        // })
        .then((resp) => {
            console.log('resp.data', resp)
        })
    return resp
    .catch((e) => {
        console.log("ERROR getting artwork data");
        console.log(e);
    });
}

// export default getAllArtworks()

getAllArtworks("monet", 0, 10);