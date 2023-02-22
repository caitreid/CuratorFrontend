// this modal is rendered by ShowExhibition
// The state that controls whether this is open or not live in ShowExhibition
// the state and the updaterfunction associated with that state is passed here as a prop.
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ExhibitionForm from '../shared/ExhibitionForm'
import messages from '../shared/AutoDismissAlert/messages'
import { updateExhibition } from '../../api/exhibition'

const EditExhibitionModal = (props) => {
    // destructure our props
    const { user, show, handleClose, updateExhibition, msgAlert, triggerRefresh } = props

    const [exhibition, setExhibition] = useState(props.exhibition)

    console.log('This is exhibition on EditExhibitionModal ', exhibition)

    const onChange = (e) => {
        e.persist()
        
        setExhibition(prevExhibition => {
            const updatedName = e.target.name
            let updatedValue = e.target.value

            if (e.target.type === 'number') {
                updatedValue = parseInt(e.target.value)
            }

            if (updatedName === 'adoptable' && e.target.checked) {
                updatedValue = true
            } else if (updatedName === 'adoptable' && !e.target.checked) {
                updatedValue = false
            }
            
            const updatedExhibition = {
                [updatedName] : updatedValue
            }
            
            console.log('the exhibition', updatedExhibition)

            return {
                ...prevExhibition, ...updatedExhibition
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        updateExhibition(user, exhibition)
            // first we'll handle closing the modal
            .then(() => handleClose())
            // we'll also send a success message
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: 'Sucessfully updated exhibition.',
                    variant: 'success'
                })
            })
            // if everything goes according to plan, we need a refresh of the show page.
            // we'll build a function in the ShowExhibition component that does this for us, and we'll import that here as a prop
            // this triggers a refresh of the parent(ShowExhibition) by changing the value of the updated piece of state which lives in useEffect's dependency array.
            .then(() => triggerRefresh())
            // if there is an error, tell the user about it
            .catch(() => {
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Failed to update exhibition',
                    variant: 'danger'
                })
            })

    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <ExhibitionForm 
                    exhibition={exhibition} 
                    handleChange={onChange} 
                    handleSubmit={onSubmit} 
                    heading="Update Exhibition"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditExhibitionModal