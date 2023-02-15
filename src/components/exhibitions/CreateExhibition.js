import React, { useState } from "react"
import ExhibitionForm from '../shared/ExhibitionForm'
import { useNavigate } from 'react-router-dom'
import { createExhibition } from '../../api/exhibition'


const CreateExhibition = (props) => {
    const { user } = props
    const navigate = useNavigate()
    console.log('this is navigate ', navigate)

    const [exhbition, setExhibition] = useState({
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        img: ''
    })

    const onChange = (e) => {
        e.persist()

        setExhibition(prevExhibition => {
            const updatedName = e.target.updatedName
            let updatedValue = e.target.updatedValue

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

        createExhibition(user, exhbition)
            .then(res => { navigate(`/exhibitions/${ res.data.exhibition.id }`)})
            .then(() => {
                msgAlert({
                    heading: 'Yeah!',
                    message: 'Your Exhibition is created!',
                    variant: 'success'
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'Uh oh!',
                    message: 'Your Exhibition was not created, sorry',
                    variant: 'danger'
                })
            })
    }

    return (
        <ExhibitionForm
            exhbition={exhibition}
            handleChange={onChange}
            handleSubmit={onSubmit}
            heading="Create a New Exhibition!"
        />
    )
}

export default CreateExhibition