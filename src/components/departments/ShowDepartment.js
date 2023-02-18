import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
import { getOneDepartment } from '../../api/departments'
import { getOneDepartmentArtworks } from "../../api/departments"
import { Link } from 'react-router-dom';


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

    const gridContainerStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
        width: '100%'
    }
    
    useEffect(() => {
        
        getOneDepartment(id)
            .then(res => setDepartment(res.data.department))
            .catch(err => console.log('this is err from ShowDepartment: ', err))

    }, [])
    
    if (department) {
        // set to 20 artworks for now. can change to whatever we want.
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
    
    // if error, display an error
    if (error) {
        return <p>Error!</p>
    }

    if (!department) {
        return <p>No departments!</p>

    } else if (department.length === 0) {
        return <p>No departments yet, go add some!</p>
    }


    let artworkCards;

    if (artworks) {

        artworkCards = artworks.map((work) => (
            <div key={ work.id }>
                <div style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundImage: `url(${work.img})`, width: '250px', height: '250px'}}></div>
                <p><b> { work.title } </b></p>
                <p> { work.date } </p>
            </div>
        ))
        
    
        return (
            <div className="container-md m-4">

                <h1>{ department.name }</h1>
                <div style={{ margin: '2rem', backgroundRepeat: 'no-repeat', backgroundImage: `url(${department.img})`, width: '100%', padding: '10rem'}}></div>


            
                <div style={ gridContainerStyle }>
                    { artworkCards }  
                </div>
                <Link to="/departments">Return to Departments</Link>
            </div>
        )
    }
    


    console.log(artworks)

    
    return (
        <>  
        </>
    )
}

export default ShowDepartment
