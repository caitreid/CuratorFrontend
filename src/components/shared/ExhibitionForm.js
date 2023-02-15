import { Form, Button, Container } from 'react-bootstrap'

const ExhibitionForm = (props) => {
    const { exhibition, handleChange, handleSubmit, heading } = props
    return (
        <Container className='justify-content-center'>
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group classname='m-2'>
                    <Form.Label>
                        Title:
                    </Form.Label>
                    <Form.Control
                        placeholder="What is the name of your Exhibition?"
                        name="title"
                        id="title"
                        value= { exhibition.title }
                        onChange={handleChange}                        
                    />
                </Form.Group>
                <Form.Group classname='m-2'>
                    <Form.Label>
                        Description:
                    </Form.Label>
                    <Form.Control
                        placeholder="What is the description of your Exhibition?"
                        name="description"
                        id="description"
                        value= { exhibition.description }
                        onChange={handleChange}                        
                    />
                </Form.Group>
                <Form.Group classname='m-2'>
                    <Form.Label>
                        Start Date:
                    </Form.Label>
                    <Form.Control
                        placeholder="When does your Exhibition start?"
                        name="startDate"
                        id="startDate"
                        value= { exhibition.startDate }
                        onChange={handleChange}                        
                    />
                </Form.Group>
                <Form.Group classname='m-2'>
                    <Form.Label>
                        End Date:
                    </Form.Label>
                    <Form.Control
                        placeholder="When does your Exhibition end?"
                        name="endDate"
                        id="endDate"
                        value= { exhibition.endDate }
                        onChange={handleChange}                        
                    />
                </Form.Group>
                <Form.Group classname='m-2'>
                    <Form.Label>
                        Image:
                    </Form.Label>
                    <Form.Control
                        placeholder="What is your Exhibitions main image?"
                        name="img"
                        id="img"
                        value= { exhibition.img }
                        onChange={handleChange}                        
                    />
                </Form.Group>
                <Button 
                    className='m-2' 
                    type='submit'>
                        Submit
                 </Button>

            </Form>

        </Container>    
    )
}

export default ExhibitionForm