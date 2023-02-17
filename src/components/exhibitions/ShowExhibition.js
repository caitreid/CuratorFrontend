import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
import { getOneExhibition } from '../../api/exhibition'
import { getOneExhibitionArtworks} from '../../api/exhibition'
import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';


const ShowExhibition = (props) => {
    const [exhibition, setExhibition] = useState(null)
    const [updated, setUpdated] = useState(false)
    const { id } = useParams()
    const { msgAlert } = props


        console.log('this is ex', exhibition)
    

        useEffect(() => {
            
            getOneExhibition(id)
                .then((res) => setExhibition(res.data.exhibition))
                .catch(err => console.log('this is err from ShowExhibition: ', err))

            }, [updated])
     
    // if error, display an error

    if (!exhibition) {
        return <p>No exhibitions!</p>

    } else if (exhibition.length === 0) {
        return <p>No exhibitions yet!</p>
    }

    let artCards;

    if (exhibition) {
        if(exhibition.artworks.length > 0) {
            artCards = exhibition.artworks.map(art => (

                <div className="artwork__image" >
                    {art.title}<br/>
                    {/* {art.description}<br/> */}
                    {art.date}<br/>
                    {art.artist}<br/>
                    {art.dimensions}<br/>
                    {art.medium}<br/>
                    <img src={art.img}>
                    </img><br/>
                    {art.department}
                </div>
 
            ))
    }}
    
        return (


        <div className="container-md m-4">
            <h1> {exhibition.title} </h1>
            <h6> {exhibition.startDate}</h6>
            <h6> {exhibition.endDate}</h6>
            <img src={exhibition.img}></img>    
            <h6> { exhibition.description }</h6>
            <div>
            
            {artCards}
            </div>
        </div>

            // <div className="container-md m-4">

            //     <h1>{ exhibition.title }</h1>
            //     <div style={{ margin: '2rem', backgroundRepeat: 'no-repeat', backgroundImage: `url(${exhibition.img})`, width: '100%', padding: '10rem'}}></div>
            
            //     <div style={ gridContainerStyle }>
            //         { artworkCards }  
            //     </div>
            //     <Link to="/exhibition">Return to Exhibition</Link>
            // </div>
        )
    }
    

export default ShowExhibition
