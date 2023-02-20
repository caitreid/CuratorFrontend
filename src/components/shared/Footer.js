import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const linkStyle = {
    color: 'black',
    textDecoration: 'underline',
	margin: '0 .5rem'
}

const alwaysOptions = (
	<>
		<Link to='/exhibitions' style={linkStyle}>
			Exhibitions
		</Link>
		<Link to='/departments' style={linkStyle}>
			Departments
		</Link>

		<Link to='/artworks' style={linkStyle}>
			Artworks
		</Link>
	</>
)

const Footer = () => (
    <div className='footer'>
        
            <Link to='/' style={linkStyle}>
                Museum API App
            </Link>

            {alwaysOptions}
    </div>
)

export default Footer
