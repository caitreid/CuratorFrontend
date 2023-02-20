
import { Button, Container, Card } from 'react-bootstrap'



const ChooseArtworks = (props) => {

    const { exhibition } = props
    console.log('this is the prop ', exhibition)

	return (
        <Container className="m-2" style={{textAlign: 'center'}}>
            <h2>Add Artwork to your Exhibition</h2>

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

                         </p>
                    <p>End Date: 

                    </p>

                </Card.Text>
            </Card.Body>
        </Card>
        
        <Button 
            className='m-2' 
            type='submit'>
                Submit and ADD Artwork
        </Button>
    
		</ Container>
	)
}

export default ChooseArtworks