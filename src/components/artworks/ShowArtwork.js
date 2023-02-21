import React, { useEffect, useState } from "react"
import { getArtworks } from "../../api/artworks"
import { useParams } from 'react-router-dom'



const ShowArtwork = (props) => {

    const [ artwork, setArtwork ] = useState(null)
    const [error, setError] = useState(false)
    console.log('this is the artworks in index', artwork)
    const { msgAlert } = props

    const { id } = useParams()

    console.log('id', id)
    
    useEffect(() => {
        

        getArtworks(1, id)
            .then((res) => setArtwork(res.artworks))
            
            .catch((err) => {
                msgAlert({
                    heading: 'Error getting artworks',
                    message: 'something went wrong !!',
                    variant: 'danger'
                })
                setError(true)
            })
    }, [msgAlert])

    console.log('artwork', artwork )
    console.log('artwork title', artwork )


    // if error, display an error
    if (error) {
        return <p>Error!</p>
    }

    if (!artwork) {
        return <p>No artworks!</p>

    } else if (artwork.length === 0) {
        return <p>No artworks yet, go add some!</p>
    }

    let artworkItem;

    if (artwork) {
        artworkItem = artwork.map(item => 
            <div key={ item.id }>
                <div className="artwork__image" style={{ backgroundImage: `url(${ item.img })`}}></div>
                <div>
                    <p className="artwork__text--title">{ item.title }</p>
                    <p>{ item.date }</p>
                    <p>{ item.department }</p>
                    <p>{ item.desc }</p>
                </div>
            </div>
        )
    }
    

    return (

        <div className="container-md m-4">
            <h1> Artwork </h1>
            
            <div>
                { artworkItem }
            </div>
        </div>
    )

}

export default ShowArtwork;