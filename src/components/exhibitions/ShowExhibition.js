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
    const { msgAlert, user } = props
    console.log('user in ShowExhibition props', user)
    console.log('msgAlert in ShowExhibition props', msgAlert)

    console.log('this is exhibition in ShowExhibition props', exhibition)
    

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

    console.log('user: ', user._id, 'exhibition owner: ', exhibition.owner._id)

    let artCards;

    if (exhibition) {
        if(exhibition.artworks.length > 0) {
            artCards = exhibition.artworks.map(art => (

                <div key={art.id} >
                    <br/>
                    <img className="exhibition__image" src={art.img}>
                    </img><br/>
                    <span className="exhibition__text--title">
                    {art.title}<br/>
                    </span>
                    <div className="exhibition__text--body">
                    <p>
                    {art.description}
                    </p>
                    <p>{art.date}</p>
                    <p>{art.artist}</p>
                    <p>{art.dimensions}</p>
                    <p>{art.medium}</p>
                    <p>{art.department}</p>
                    
                    </div>
                </div>
 
            ))
        }
    }
    return(
        <div className="container-md">
            <span className="exhibition__text--extitle"> {exhibition.title} </span>
            <div>{exhibition.startDate}</div>
            <div>{exhibition.endDate}</div>
            <img className="exhibition__image" src={exhibition.img}></img>    
            <p>{ exhibition.description }</p>
            {
                user._id === exhibition.owner._id
                ?
                <p>I created this exhibition</p>
                :
                <p>I didn't create this exhibition</p>
            }
            

            <div>
                {artCards}
            </div>
        </div>
    )
}

export default ShowExhibition
