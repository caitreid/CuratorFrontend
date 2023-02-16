import React, { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card'
import {  apiArtUrl } from "../../apiConfigArt"
import { Link } from 'react-router-dom'
import { render } from "@testing-library/react"
import { getAllArtworks } from "../../api/artworks"

const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const IndexArtworks = (props) => {

    const [ artworks, setArtworks ] = useState(null)
    const [error, setError] = useState(false)
    console.log('these are the artworks in index', artworks)
    const { msgAlert } = props

    useEffect(() => {
        // set to 50 artworks for now. can change to whatever we want.
        getAllArtworks(50)
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

    const artworkCards = artworks.map((artwork) => (
        // <Card key={ artwork.id } style={{ backgroundImage: `url(${artwork.img})`, width: '30%', margin: 5 }}>
        //     <Card.Header>{ artwork.title }</Card.Header>
        //     <Card.Body>
        //         <Card.Text>
        //             <p>Department: { artwork.department }</p>
        //             <p>Type: { artwork.type }</p>
        //         </Card.Text>
                
        //     </Card.Body>
        // </Card>

        <div className="artwork artwork__card" key={ artwork.id }>
            <div className="artwork__image" style={{ backgroundImage: `url(${artwork.img})`}}></div>
            <div className="artwork__text">
                <p className="artwork__text--title">{ artwork.title }</p>
                <p>{ artwork.department }</p>   
                <Link to={ `/artworks/${artwork.id}` }>See Artwork</Link>
                
            </div>
        </div>
    ))


    return (
        <div className="container-md" style={ cardContainerStyle }>
            { artworkCards }
        </div>
        
    )

}

export default IndexArtworks;