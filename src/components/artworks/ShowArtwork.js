import React, { useEffect, useState } from "react"
import { getOneArtwork } from "../../api/artworks"
import { useParams } from 'react-router-dom'



const ShowArtwork = (props) => {

    const [ artwork, setArtwork ] = useState(null)
    const [error, setError] = useState(false)
    console.log('this is the artworks in index', artwork)
    const { msgAlert } = props

    const { id } = useParams()

    console.log('id', id)
    
    useEffect(() => {
        
        getOneArtwork(id)
            .then((res) => setArtwork(res.artwork))
            
            .catch((err) => {
                msgAlert({
                    heading: 'Error getting artworks',
                    message: 'something went wrong !!',
                    variant: 'danger'
                })
                setError(true)
            })
    }, [])

    console.log('artwork', artwork )
    console.log('artwork title', artwork)


    // if error, display an error
    if (error) {
        return <p>Error!</p>
    }

    if (!artwork) {
        return <p>No artworks!</p>

    } else if (artwork.length === 0) {
        return <p>No artworks yet, go add some!</p>
    }    

    return (

        <div className="container-md m-4">
            <h1> The Artwork </h1>
            <div key={ artwork.id }>
                <div className="artwork__image" style={{ backgroundImage: `url(${ artwork.img })`}}></div>
                <div>
                    <p className="artwork__text--title">{ artwork.title }</p>
                    <p>{ artwork.date }</p>
                    <p>{ artwork.department }</p>
                    <p>{ artwork.desc }</p>
                </div>
            </div>
            
        </div>
    )

}

export default ShowArtwork;