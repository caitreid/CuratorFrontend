import React, { useEffect, useState } from "react"
// import Card from 'react-bootstrap/Card'
// import { Link } from 'react-router-dom'
// import { render } from "@testing-library/react"
import { getArtworks } from "../../api/artworks"
import { useParams } from 'react-router-dom'

const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const ShowArtwork = (props) => {

    const [ artwork, setArtwork ] = useState(null)
    const [error, setError] = useState(false)
    console.log('this is the artworks in index', artwork)
    const { msgAlert } = props

    const { id } = useParams()

    console.log('id', id)
    // const navigate = useNavigate()

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
        // artworkItem = artwork.map(item => {
        //     <div className="artwork artwork__card" key={ item.id }>
        //         {/* <div className="artwork__image" style={{ backgroundImage: `url(${ item.img })`}}></div>
        //         <div className="artwork__text">
        //             <p className="artwork__text--title">{ item.title }</p> */}
        //             <p>{ item.title }</p>  
        //             <p>Test</p>
        //             { console.log(item.title) }
        //         {/* </div> */}

        //         { item }
        //     </div>
        // })
        artworkItem = artwork.map(item => 
            <div>
                <p>{ item.id }</p>
            </div>
            
        )
    }
    

    return (
        // <div className="container-md m-4" style={ cardContainerStyle } id={ artwork.map(item => item.id) }>
        //     <h1>Artwork</h1>
        //     <div className="artwork__image" style={{ backgroundImage: `url(${ item.img })`}}></div>
        //     <br></br>
        //     {/* { artworkItem } */}
        //     <p className="artwork__text--title">{ artwork.map(item => <p>{item.title}</p>) }</p>
        // </div>
        <>
            <h1> Artwork </h1>
            <div>
                { artworkItem }
            </div>
        </>
    )

}

export default ShowArtwork;