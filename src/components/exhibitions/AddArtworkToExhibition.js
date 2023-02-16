import React, { useState } from "react"
import ExhibitionForm from '../shared/ExhibitionForm'
import { useNavigate } from 'react-router-dom'
import { createExhibition } from '../../api/exhibition'
import { createExhibitionSuccess, createExhibitionFailure } from '../shared/AutoDismissAlert/messages'


// on this page , we'll need to 
// bring in exhibition information from the previous page (create exhibition) like the title , description , start/end dates, and the chosen image for the exhibition
// render artwork under that, much like the index page
// make the artwork clickable or have a plus/add/favorite type button on each one
// if the user clicks on that, we pass that data to the database and add it to that EXHIBITION ID one by one
// a finish or submit button for once the user is done adding art, that should take the user to their SHOW ONE EXHIBITION page i think, which shows the exhibition they just built



const addArtToExhibition = (props) => {
    const { user, msgAlert } = props
    const navigate = useNavigate()
    console.log('this is navigate ', navigate)

    const [exhibition, setExhibition] = useState({
        // use empty string or empty array?
        artworks: []
    })
    //const [startDate, setStartDate] = useState(new Date());

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
        /// this is not a create new exhibition, this is more of an update or adding to it
        createExhibition(user, exhibition)
            //this should be ok, taking you to a SHOW ONE exhibition page
            .then(res => { navigate(`/exhibitions/${ res.data.exhibition.id }`)})
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
        <AddArtworkForm 
            exhibition={exhibition}
            handleChange={onChange}
            handleSubmit={onSubmit}
            heading="Create a New Exhibition!"
        />
    )
}

export default addArtToExhibition