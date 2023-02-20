import React, { useEffect, useState } from "react"
// import Card from 'react-bootstrap/Card'
// import {  apiArtUrl } from "../../apiConfigArt"
import { Link } from 'react-router-dom'
// import { render } from "@testing-library/react"
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
    // console.log('these are the artworks in index', artworks)
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
    
    // const [ artArray, setArtArray] = useState([])    

    // const somefunc = (artwork) => {
    //     console.log('thsi is add', artwork)
    //     // newart.push(artwork)
    //     // setArtArray(artArray.push(artwork))
    //     setArtArray(current => [
    //         ...current, artwork
    //     ])
    // }

    // console.log('this is artArray', artArray)

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
                    message: addArtworkFailure,
                    variant: 'danger'
                })
            })
    }

    const artworkCards = artworks.map((artwork) => (
        <div className="artwork artwork__card" key={ artwork.id }>
            {/* this line below works if we uncomment it and comment the other. fixed url */}
            <div className="artwork__image" style={{ backgroundImage: `url(${artwork.img})`}}></div>
            {/* <div className="artwork__image" style={{ backgroundColor: 'pink'}}></div> */}
            <div className="artwork__text">
                <p className="artwork__text--title">{ artwork.title }</p>
                <p>{ artwork.department }</p>   
                <Button
                artwork={artwork}
                data={artwork.id}
                // onClick={() => (somefunc(artwork))}
                onClick={(e) => onClick(e, artwork)}
                // onClick={() => (somefunc(artwork))}
                >          
                Add Artwork
                
                </Button>
                
            </div>
        </div>
    ))


    return (
        <>
            <div className="container-md" style={ cardContainerStyle }>
                { artworkCards }
            </div>
            <button
                className="btn btn-success"
                onClick={(e) => onClick(e)}
            >Add Art to Exhibition</button>
        </>
    )

}

export default AddArtworks