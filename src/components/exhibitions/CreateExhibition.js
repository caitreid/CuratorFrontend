import React, { useState } from "react"
import ExhibitionForm from '../shared/ExhibitionForm'
import { useNavigate } from 'react-router-dom'
import { createExhibition } from '../../api/exhibition'


const CreateExhibition = (props) => {
    const { user, msgAlert } = props
    const navigate = useNavigate()


    const [exhibition, setExhibition] = useState({
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        img: ''
    })


    const onChange = (e) => {
        e.persist()

        setExhibition(prevExhibition => {
            const updatedName = e.target.name
            let updatedValue = e.target.value

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
 
            .then(res => { navigate(`/exhibitions/${res.data.exhibition._id}`)})
            .then(() => {
                msgAlert({
                    heading: 'Yeah!',
                    message: 'Successfully created exhibition',
                    variant: 'success'
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'Uh oh!',
                    message: 'Failed to create exhibition',
                    variant: 'danger'
                })
            })
    }

    return (
        <div class="container-fluid col-sm-10 col-md-5 mx-auto mt-5">
            <ExhibitionForm
                exhibition={exhibition}
                handleChange={onChange}
                handleSubmit={onSubmit}
                heading="Create a New Exhibition!"
                />

        </div>
    )
}

export default CreateExhibition