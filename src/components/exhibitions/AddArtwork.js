import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { addArtwork, getArtworks } from "../../api/artworks"
import { Button } from "react-bootstrap"
import { addArtworkSuccess, addArtworkFailure } from '../shared/AutoDismissAlert/messages'

const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
    
}

const AddArtworks = (props) => {

    const [ artworks, setArtworks ] = useState(null)
    const [error, setError] = useState(false)
    const [ artArray, setArtArray] = useState([])   
    const { msgAlert, exhibition, triggerRefresh } = props

    console.log('props on AddArtworks', props)

    useEffect(() => {
        
        getArtworks(50)
            .then((res) => setArtworks(res.artworks))
            .catch((err) => {
                msgAlert({
                    heading: 'Error getting artworks',
                    message: 'something went wrong !!',
                    variant: 'danger'
                })
                setError(true)
            })
    }, [msgAlert])

    // if error, display an error
    if (error) {
        return <p>Error!</p>
    }

    if (!artworks) {
        return <p>No artworks!</p>

    } else if (artworks.length === 0) {
        return <p>No artworkss yet, go add some!</p>
    }
    

    const onClick = (e, artwork) => {
        e.preventDefault()

        addArtwork(exhibition._id, artwork)
            .then(() => triggerRefresh())
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: addArtworkSuccess,
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            // if there is an error, tell the user about it
            .catch(() => {
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Failed to add Artwork',
                    variant: 'danger'
                })
            })
    }

    const artworkCards = artworks.map((artwork) => (
        <div className="artwork artwork__card" key={ artwork.id }>

            <div className="artwork__image" style={{ backgroundImage: `url(${artwork.img})`}}></div>
 
            <div className="artwork__text">
                <p className="artwork__text--title">{ artwork.title }</p>
                <p>{ artwork.department }</p>   
                <Button
                className="button button--outline"
                artwork={artwork}
                data={artwork.id}
                onClick={(e) => onClick(e, artwork)}
                >          
                Add Artwork
                
                </Button>
                
            </div>
        </div>
    ))


    return (
        <>

            <div className="container-md mt-4" style={ cardContainerStyle }>
                { artworkCards }
            </div>
        </>
    )

}

export default AddArtworks