import ArtworksIndex from './artworks/IndexArtworks'
import Container from 'react-bootstrap/Container'

const Home = (props) => {
	return (
		<Container className="m-2 ms-4 mt-4" style={{textAlign: 'left'}}>
			<h2>View the Collection</h2>
			<ArtworksIndex msgAlert={ props.msgAlert } />
		</ Container>
	)
}

export default Home
