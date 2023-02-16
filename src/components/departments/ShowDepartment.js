import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { getOneDepartment } from '../../api/departments'
import { getOneDepartmentArtworks } from "../../api/departments"


const ShowDepartment = (props) => {
    const [department, setDepartment] = useState(null)
    const [artworks, setArtworks] = useState(null)
    const { id } = useParams()
    const [error, setError] = useState(false)
    // console.log('these are the artworks in index', artworks)
    // console.log('this is department', department)
    const { msgAlert } = props

    const cardContainerStyle = {
        display: 'flex',
        flexFlow: 'row wrap'
    }
    
    useEffect(() => {
        
        getOneDepartment(id)
            .then(res => setDepartment(res.data.department))
            .catch(err => console.log('this is err from ShowDepartment: ', err))

            if(!department) {
                return <p>Loading...</p>
            
            } else {
                // set to 50 artworks for now. can change to whatever we want.
                getOneDepartmentArtworks(20, department.name)
                    .then((res) => setArtworks(res.artworks))
                    .catch((err) => {
                        msgAlert({
                            heading: 'Error getting artworks',
                            message: 'something went wrong !!',
                            variant: 'danger'
                        })
                        setError(true)
                    })

            }
        
    }, [msgAlert])
    
    console.log('this is department', department)

    

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
        // style={{ backgroundImage: `url(${artwork.img})`, width: '20rem', height: '20rem', margin: 5, color: 'white' }}
        <Card key={ artwork.id } style={{ width: '20%', margin: 3, color: 'beige' }}>
            <Card.Img src={artwork.img}/>
            <Card.ImgOverlay>
            <Card.Header>{ artwork.title }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>Department: { artwork.department }</p>
                    <p>Type: { artwork.type }</p>
                </Card.Text>
            </Card.Body>
            </Card.ImgOverlay>
        </Card>
    ))
    return (
        <>
            <h1>Welcome to the {department.name} page!</h1>
            <div className="container-md" style={ cardContainerStyle }>
            {artworkCards}
            </div>
            
        </>
    )
}

export default ShowDepartment


// import React, { useEffect, useState } from "react"
// import Card from 'react-bootstrap/Card'
// import {  apiArtUrl } from "../../apiConfigArt"
// import { Link } from 'react-router-dom'
// import { render } from "@testing-library/react"
// import { getOneDepartmentArtworks } from "../../api/departments"

// const cardContainerStyle = {
//     display: 'flex',
//     flexFlow: 'row wrap',
//     justifyContent: 'center'
// }

// const ShowDepartment = (props) => {

//     const [ artworks, setArtworks ] = useState(null)
//     const [error, setError] = useState(false)
//     console.log('these are the artworks in index', artworks)
//     const { msgAlert } = props

//     useEffect(() => {
//         // set to 50 artworks for now. can change to whatever we want.
//         getOneDepartmentArtworks(50)
//             .then((res) => setArtworks(res.artworks))
//             .catch((err) => {
//                 msgAlert({
//                     heading: 'Error getting artworks',
//                     message: 'something went wrong !!',
//                     variant: 'danger'
//                 })
//                 setError(true)
//             })
//     }, [msgAlert])

//     // if error, display an error
//     if (error) {
//         return <p>Error!</p>
//     }

//     if (!artworks) {
//         return <p>No artworks!</p>

//     } else if (artworks.length === 0) {
//         return <p>No artworkss yet, go add some!</p>
//     }

//     const artworkCards = artworks.map((artwork) => (
//         <Card key={ artwork.id } style={{ backgroundImage: `url(${artwork.img})`, width: '30%', margin: 5 }}>
//             <Card.Header>{ artwork.title }</Card.Header>
//             <Card.Body>
//                 <Card.Text>
//                     <p>Department: { artwork.department }</p>
//                     <p>Type: { artwork.type }</p>
//                 </Card.Text>
                
//             </Card.Body>
//         </Card>
//     ))


//     return (
//         <div className="container-md" style={ cardContainerStyle }>
//             { artworkCards }
//         </div>
        
//     )

// }

// export default ShowDepartment