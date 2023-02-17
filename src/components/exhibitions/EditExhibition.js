import React, { useState } from "react"
import ExhibitionForm from '../shared/ExhibitionForm'
import { editExhibitionSuccess, editExhibitionFailure } from '../shared/AutoDismissAlert/messages'


// import { useNavigate } from 'react-router-dom'
// import { createExhibition } from '../../api/exhibition'


const EditExhibition = (props) => {
    const { user, updateExhibition, triggerRefresh, msgAlert } = props

    const [exhibition, setExhibition] = useState(props.exhibition)

    // where is this going to render?  we said we'd put it on the USER EXHIBITION INDEX page
    // so we need to build a button there that will handle all of the changes there.

    const onChange = (e) => {
        e.persist()

        setExhibition(prevExhibition => {
            const updatedName = e.target.name
            let updatedValue = e.target.value

            console.log('this is the previous exhibition ', updatedName)
            console.log('this is the updated exhibition ', updatedValue)
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

        updateExhibition(user, exhibition)
            //where does user go after hitting the button? i think just back to THEIR exhibition index page
            .then(res => { navigate(`/exhibitions/`)})
            .then(() => {
                msgAlert({
                    heading: 'Yeah!',
                    message: editExhibitionSuccess,
                    variant: 'success'
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'Uh oh!',
                    message: editExhibitionFailure,
                    variant: 'danger'
                })
            })
    }

    return (
        <ExhibitionForm
            exhibition={exhibition}
            handleChange={onChange}
            handleSubmit={onSubmit}
            heading="Update your Exhibition!"
        />
    )
}

export default EditExhibition