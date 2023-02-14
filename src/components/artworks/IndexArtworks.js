import React, { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card'
// import Layout from "../shared/Layout"

// import axios from 'axios'

// import apiBookUrl from '../../apiConfigBook'
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
        getAllArtworks("monet", 0, 15)
            .then((res) => setArtworks(res.artworks))
            // .then((res)=> {
            //     setArtworks(res.data.artworks)
            //     console.log('this is the res.data.artworks', res.data.artworks)
            // })
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
        // if no pets loaded yet, display 'loading'
        // return <LoadingScreen />
        return <p>No artworks!</p>

    } else if (artworks.length === 0) {
        // otherwise if there ARE no pets, display that message
        return <p>No artworkss yet, go add some!</p>
    }

    const artworkCards = artworks.map((artwork) => (
        <Card key={ artwork.id } style={{ width: '30%', margin: 5 }}>
            <Card.Header>{ artwork.title }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>Department: { artwork.department }</p>
                    <p>Type: { artwork.type }</p>
                </Card.Text>
                
            </Card.Body>
        </Card>
    ))


    return (
        <div className="container-md" style={ cardContainerStyle }>
            
            
            
            { artworkCards }
        </div>
        
    )

}

export default IndexArtworks;