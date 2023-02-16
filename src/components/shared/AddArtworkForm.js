//import ArtworksIndex from './artworks/IndexArtworks'
//import Container from 'react-bootstrap/Container'
import { Form, Button, Container, Card } from 'react-bootstrap'

// need button for submit button
// do we need form?
// need to bring in data from the exhibition that was just started

const ChooseArtworks = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
        <Container className="m-2" style={{textAlign: 'center'}}>
            <h2>Add Artwork to your Exhibition</h2>

            {/* maybe style this with bg image */}
        <Card 
        // key={ exhibition.id }
         >
            <Card.Header>
                {/* { exhibiton.title  } */}
                </Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>Description:
                         {/* { exhibiton.description } */}
                         </p>
                    <p>Start Date:
                         {/* { exhibiton.startDate } */}
                         </p>
                    <p>End Date: 
                        {/* { exhibiton.endDate } */}
                    </p>
                    {/* <p>Image: default image</p> */}
                </Card.Text>
            </Card.Body>
        </Card>
        
        <Button 
            className='m-2' 
            type='submit'>
                Submit and ADD Artwork
        </Button>
    
    
			{/* <ArtworksIndex msgAlert={ props.msgAlert } /> */}
		</ Container>
	)
}

export default ChooseArtworks