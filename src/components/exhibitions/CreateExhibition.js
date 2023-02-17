import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

// api and messages
import { createExhibition } from '../../api/exhibition'
import { createExhibitionSuccess, createExhibitionFailure } from '../shared/AutoDismissAlert/messages'

// components
import AddArtworks from "./create/AddArtwork"
import ExhibitionForm from './create/ExhibitionForm'

const CreateExhibition = (props) => {
    const { user, msgAlert } = props
    const navigate = useNavigate()
    //console.log('this is navigate ', navigate)

    const [exhibition, setExhibition] = useState({
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        img: '',
    })
    //const [startDate, setStartDate] = useState(new Date());

    const onChange = (e) => {
        e.persist()

        setExhibition(prevExhibition => {
            const updatedName = e.target.name
            let updatedValue = e.target.value

            // we possibly need to tackle user entry here on DATES
            // using a calendar picker would be ideal to eliminate errors

            const updatedExhibition = {
                [updatedName] :  updatedValue
            }
            return {
                ...prevExhibition, ...updatedExhibition
            }

        })
    }

    const onSubmit = (e) => {
        // e.preventDefault()

        console.log('this is being clicked')

        // console.log('state of artworks', artworks)

        // createExhibition(user, exhibition)
            
        //     .then(() => {
        //         msgAlert({
        //             heading: 'Yeah!',
        //             message: createExhibitionSuccess,
        //             variant: 'success'
        //         })
        //     })
        //     .catch(() => {
        //         msgAlert({
        //             heading: 'Uh oh!',
        //             message: createExhibitionFailure,
        //             variant: 'danger'
        //         })
        //     })
    }

    return (
        <div className='container-md p-4'>
        
            <ExhibitionForm
                exhibition={exhibition}
                handleChange={onChange}
                // handleSubmit={onSubmit}
                heading="Create a New Exhibition"
            />
            <AddArtworks/>

            <Button 
                onClick={() => onSubmit()}
                className='btn btn-success m-2' 
                type='submit'>
                    Submit and ADD Artwork
            </Button>
        </div>
    )
}

export default CreateExhibition