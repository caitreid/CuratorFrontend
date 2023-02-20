import React, { useState } from "react"
import ExhibitionForm from '../shared/ExhibitionForm'
import { useNavigate } from 'react-router-dom'
import { createExhibition } from '../../api/exhibition'
import { createExhibitionSuccess, createExhibitionFailure } from '../shared/AutoDismissAlert/messages'
import AddArtworks from "./AddArtwork"


const CreateExhibition = (props) => {
    const { user, msgAlert } = props
    const navigate = useNavigate()
    //console.log('this is navigate ', navigate)

    const [exhibition, setExhibition] = useState({
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        img: ''
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
        e.preventDefault()
        

        createExhibition(user, exhibition)
            // should go to an ADD ARTWORKS PAGE next so that the user can add art to this exhibition id
            // probably /exhibtions/exhibitionID/addArt
            // fix later 
            .then(res => { navigate(`/exhibitions/${res.data.exhibition._id}`)})
            .then(() => {
                msgAlert({
                    heading: 'Yeah!',
                    message: createExhibitionSuccess,
                    variant: 'success'
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'Uh oh!',
                    message: createExhibitionFailure,
                    variant: 'danger'
                })
            })
    }

    return (
        <>
        
        <ExhibitionForm
            exhibition={exhibition}
            handleChange={onChange}
            handleSubmit={onSubmit}
            heading="Create a New Exhibition!"
            />
        {/* <AddArtworks/> */}
        </>
    )
}

export default CreateExhibition