import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
	marginRight: '1rem',
}
const authenticatedOptions = (
	<>

		<NavLink className="mt-2" to='change-password' style={linkStyle}>
			Change Password
		</NavLink>
		<NavLink className="mt-2" to='sign-out' style={linkStyle}>
			Sign Out
		</NavLink>
	</>
)

const unauthenticatedOptions = (
	<>
        <NavLink className="mt-2" to='sign-up' style={linkStyle}>
			Sign Up
        </NavLink>
        <NavLink className="mt-2" to='sign-in' style={linkStyle}>
			Sign In
        </NavLink>
	</>
)

const alwaysOptions = (
	< >
		<NavLink className="mt-2" to='/exhibitions' style={linkStyle}>
			Exhibitions
		</NavLink>
		<NavLink className="mt-2" to='/departments' style={linkStyle}>
			Departments
		</NavLink>

		<NavLink  className="mt-2" to='/artworks' style={linkStyle}>
			Artworks
		</NavLink>
	</>
)

const Header = ({ user }) => (
	<Navbar bg='primary' variant='dark' expand='md'>
		<Navbar.Brand className="mx-4">
            <Link to='/' style={linkStyle}>
                Museum API App
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text me-4'>Welcome, {user.email}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
