import ArtworksIndex from './artworks/IndexArtworks'
import Container from 'react-bootstrap/Container'

const Home = (props) => {
	// const { msgAlert, user } = props
	//console.log('props in home', props)

	return (
		<Container className="m-2" style={{textAlign: 'center'}}>
			<h2>View the Collection</h2>
			<ArtworksIndex msgAlert={ props.msgAlert } />
		</ Container>
	)
}

export default Home
