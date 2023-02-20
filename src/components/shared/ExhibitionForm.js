import { Form, Button, Container } from 'react-bootstrap'

// import this later at end of MVP. needs formating and other additions to make it look good. 
// without that its just a bunch of crazy text on the screen , calendar data
//import DatePicker from 'react-datepicker'


const ExhibitionForm = (props) => {
    const { exhibition, handleChange, handleSubmit, heading } = props
    
    return (
        <Container className='justify-content-center'>
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='m-2'>
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
                <Form.Group className='m-2'>
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
                <Form.Group className='m-2'>
                    <Form.Label>
                        Start Date:
                    </Form.Label>
                    {/* <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} /> */}
                    <Form.Control

                        placeholder="When does your Exhibition start?"
                        name="startDate"
                        id="startDate"
                        value= { exhibition.startDate }
                        onChange={handleChange}                        
                    />
                </Form.Group>
                <Form.Group className='m-2'>
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
                <Form.Group className='m-2'>
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
                    exhibition={exhibition}
                    className='m-2' 
                    type='submit'>
                        Submit
                 </Button>

            </Form>

        </Container>    
    )
}

export default ExhibitionForm