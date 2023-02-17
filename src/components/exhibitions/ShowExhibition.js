import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
import { getOneExhibition } from '../../api/exhibition'
import { getOneExhibitionArtworks} from '../../api/exhibition'
import { Link } from 'react-router-dom';


const ShowExhibition = (props) => {
    const [exhibition, setExhibition] = useState(null)

    const [artworks, setArtworks] = useState(null)
    const { id } = useParams()
    const [error, setError] = useState(false)
    const { msgAlert } = props

    const cardContainerStyle = {
        display: 'flex',
        flexFlow: 'row wrap'
    }

    const gridContainerStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
        width: '100%'
    }
    

useEffect(() => {
        
    getOneExhibition(id)
        .then(res => setExhibition(res.data.exhibiton))
        .catch(err => console.log('this is err from ShowExhibition: ', err))

}, [])
if (exhibition) {
    // set to 20 artworks for now. can change to whatever we want.
    getOneExhibitionArtworks(20, exhibition.name)
        .then((res) => setArtworks(res.data.artworks))
        .catch((err) => {
            msgAlert({
                heading: 'Error getting artworks',
                message: 'something went wrong !!',
                variant: 'danger'
            })
            setError(true)
        })
    }
     
    // if error, display an error
    if (error) {
        return <p>Error!</p>
    }

    if (!exhibition) {
        return <p>No departments!</p>

    } else if (exhibition.length === 0) {
        return <p>No exhibitions yet!</p>
    }


    let artworkCards;

    if (artworks) {

        artworkCards = exhibition.map((exhibition) => (
            <div key={ exhibition.id }>
                <div style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundImage: `url(${exhibition.img})`, width: '250px', height: '250px'}}></div>
                <p><b> { exhibition.title } </b></p>
                <p> { exhibition.date } </p>
            </div>
        ))
        
    
        return (
            <div className="container-md m-4">

                <h1>{ exhibition.title }</h1>
                <div style={{ margin: '2rem', backgroundRepeat: 'no-repeat', backgroundImage: `url(${exhibition.img})`, width: '100%', padding: '10rem'}}></div>
            
                <div style={ gridContainerStyle }>
                    { artworkCards }  
                </div>
                <Link to="/exhibition">Return to Departments</Link>
            </div>
        )
    }
    


    console.log(artworks)

    
    return (
        <>  
        </>
    )
}

export default ShowExhibition
