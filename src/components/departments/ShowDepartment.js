import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneDepartment } from '../../api/departments'

const ShowDepartment = (props) => {
    const [department, setDepartment] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getOneDepartment(id)
            .then(res => setDepartment(res.data.department))
            .catch(err => console.log('this is err from ShowDepartment: ', err))
    }, [])

    if(!department) {
        return <p>Loading...</p>
    }

    return (
        <>
            <h1>Welcome to the {department.name} page!</h1>
        </>
    )
}

export default ShowDepartment