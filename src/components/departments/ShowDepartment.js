import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { getOneDepartment } from '../../api/departments'
import { getOneDepartmentArtworks } from "../../api/departments"


const ShowDepartment = (props) => {
    const [department, setDepartment] = useState(null)
    const [artworks, setArtworks] = useState(null)
    const { id } = useParams()
    const [error, setError] = useState(false)

    const { msgAlert } = props

    const cardContainerStyle = {
        display: 'flex',
        flexFlow: 'row wrap'
    }
    
    useEffect(() => {
        
        getOneDepartment(id)
            .then(res => setDepartment(res.data.department))
            .catch(err => console.log('this is err from ShowDepartment: ', err))
    }, [])
    
    if (department) {



        // set to 50 artworks for now. can change to whatever we want.
        getOneDepartmentArtworks(20, department.name)
            .then((res) => setArtworks(res.artworks))
            .catch((err) => {
                msgAlert({
                    heading: 'Error getting artworks',
                    message: 'something went wrong !!',
                    variant: 'danger'
                })
                setError(true)
            })

    }
        

    // console.log('this is department name', department.name)

    

    // if error, display an error
    if (error) {
        return <p>Error!</p>
    }

    if (!department) {
        return <p>No departments!</p>

    } else if (department.length === 0) {
        return <p>No departments yet, go add some!</p>
    }

    // const departmentArtworks = artworks.map((artwork) => {
    //     <div key={ artwork.id }>
    //         <p> { artwork.title }</p>
    //     </div>
    // })

    
    return (
        <>
            <div className="container-md m-4" style={ cardContainerStyle }>
                <h1>{ department.name }</h1>
                <div style={{ backgroundImage: `url(${department.img})`, width: '100%', padding: '10rem'}}></div>
            </div>
            
        </>
    )
}

export default ShowDepartment
