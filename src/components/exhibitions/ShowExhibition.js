import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
import { getOneExhibition } from '../../api/exhibition'
import { getOneExhibitionArtworks} from '../../api/exhibition'
import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';


const ShowExhibition = (props) => {
    const [exhibition, setExhibition] = useState(null)
    const { id } = useParams()
    const { msgAlert } = props

    // const cardContainerStyle = {
    //     display: 'flex',
    //     flexFlow: 'row wrap'
    // }

    

            useEffect(() => {
                
            getOneExhibition(id)
                .then(res => setExhibition(res.data.exhibiton))
                .catch(err => console.log('this is err from ShowExhibition: ', err))

        }, [])
     
    // if error, display an error

    if (!exhibition) {
        return <p>No exhibitions!</p>

    } else if (exhibition.length === 0) {
        return <p>No exhibitions yet!</p>
    }


    // let artworkCards;

    // if (artworks) {

    //     artworkCards = exhibition.map((exhibition) => (
    //         <div key={ exhibition.id }>
    //             <div style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundImage: `url(${exhibition.img})`, width: '250px', height: '250px'}}></div>
    //             <p><b> { exhibition.title } </b></p>
    //             <p> { exhibition.date } </p>
    //         </div>
    //     ))
        
    
        return (


                <>
                    <Container>
                        <Card>
                    <Card.Header>
                    <h1>Title</h1>
                    </Card.Header>


                        </Card>
                        

                    </Container>
                
                </>

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
