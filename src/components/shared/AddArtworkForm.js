//import ArtworksIndex from './artworks/IndexArtworks'
//import Container from 'react-bootstrap/Container'
import { Button, Container, Card } from 'react-bootstrap'
//import { useState } from 'react'



// need button for submit button
// do we need form?
// need to bring in data from the exhibition that was just started

const ChooseArtworks = (props) => {
	// const { msgAlert, user } = props
	//console.log('props in home', props)
    const { exhibition } = props
    console.log('this is the prop ', exhibition)

	return (
        <Container className="m-2" style={{textAlign: 'center'}}>
            <h2>Add Artwork to your Exhibition</h2>

            {/* maybe style this with bg image */}
        <Card 
        key={ exhibition.id }
         >
            <Card.Header>
                { exhibition.title  }
                </Card.Header>
            <Card.Body>
                <Card.Text>
                    <p>Description:
                         { exhibition.description }
                         </p>
                    <p>Start Date:
                         {/* { exhibition.startDate } */}
                         </p>
                    <p>End Date: 
                        {/* { exhibition.endDate } */}
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