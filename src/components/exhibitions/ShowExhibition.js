import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
import { getOneExhibition, removeExhibition, updateExhibition } from '../../api/exhibition'
import { getOneExhibitionArtworks} from '../../api/exhibition'
import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import messages from '../shared/AutoDismissAlert/messages'
import { useNavigate } from 'react-router-dom'
import AddArtworks from './AddArtwork';
import EditExhibitionModal from './EditExhibitionModal';

const ShowExhibition = (props) => {
    const [exhibition, setExhibition] = useState(null)
    const [updated, setUpdated] = useState(false)
    const { id } = useParams()
    const { msgAlert, user } = props
    console.log('user in ShowExhibition props', user)
    
    const [editModalShow, setEditModalShow] = useState(false)
    const [exhibitionModalShow, setExhibitionModalShow] = useState(false)

    console.log('this is exhibition in ShowExhibition props', exhibition)
    
    const navigate = useNavigate()

    useEffect(() => {
        
        getOneExhibition(id)
            .then((res) => setExhibition(res.data.exhibition))
            .catch(err => console.log('this is err from ShowExhibition: ', err))

        }, [updated])
     
    // if error, display an error

    if (!exhibition) {
        return <p>No exhibitions!</p>

    } else if (exhibition.length === 0) {
        return <p>No exhibitions yet!</p>
    }


    let artCards;

    if (exhibition) {
        if(exhibition.artworks.length > 0) {
            artCards = exhibition.artworks.map((art, id) => (

                <div key={id} >
                    <br/>
                    <img className="exhibition__image" src={art.img}>
                    </img><br/>
                    <span className="exhibition__text--title">
                    {art.title}<br/>
                    </span>
                    <div className="exhibition__text--body">
                    <p>
                    {art.description}
                    </p>
                    <p>{art.date}</p>
                    <p>{art.artist}</p>
                    <p>{art.dimensions}</p>
                    <p>{art.medium}</p>
                    <p>{art.department}</p>
                    
                    </div>
                </div>
 
            ))
        }
    }

    const deleteExhibition =() => {
        removeExhibition(user, exhibition._id)
            // upon success, send the appropriate message and redirect users
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.removeExhibitionSuccess,
                    variant: 'success'
                })
            })
            .then(() => {navigate('/exhibitions')})
            // upon failure, just send a message, no navigation required
            .catch(err => {
                msgAlert({
                    heading: 'Error',
                    message: messages.removeExhibitionFailure,
                    variant: 'danger'
                })
            })
    }

    return(
        <div className="container-md">
            <span className="exhibition__text--extitle"> {exhibition.title} </span>
            <div>{exhibition.startDate}</div>
            <div>{exhibition.endDate}</div>
            <img className="exhibition__image" src={exhibition.img}></img>    
            <p>{ exhibition.description }</p>
            { 
                user && user._id === exhibition.owner._id
                ?
                <div>
                    <p>I created this exhibition</p>
                    <button 
                        className="btn btn-warning"
                        onClick={() => deleteExhibition()}
                    >    
                        Delete Exhibition 
                    </button>

                    <button 
                        onClick={() => setEditModalShow(true)}
                        className='btn btn-success'>
                            Edit Exhibition
                    </button>

                    {/* <button className='btn btn-success'>Add Artworks</button> */}
                    <AddArtworks
                        msgAlert={msgAlert}
                        exhibition={exhibition}
                        triggerRefresh={() => setUpdated(prev => !prev)}
                    />
                </div>
                :
                <p>I'm logged out / I didn't create this exhibition</p>
            }
            <div>
                { artCards }
            </div>
            <div>
            <EditExhibitionModal 
                user={user}
                show={editModalShow}
                handleClose={() => setEditModalShow(false)}
                updateExhibition={updateExhibition}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                exhibition={exhibition}
            />
            </div>
        </div>
    )
}

export default ShowExhibition
