import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
	margin: '0 .5rem'
}
const authenticatedOptions = (
	<>
		<NavLink to='create-exhibition' style={linkStyle}>
			Create New Exhibition
		</NavLink>
		<NavLink to='add-artworks' style={linkStyle}>
			Add Art to Exhibition
		</NavLink>
		<NavLink to='change-password' style={linkStyle}>
			Change Password
		</NavLink>
		<NavLink to='sign-out' style={linkStyle}>
			Sign Out
		</NavLink>
	</>
)

const unauthenticatedOptions = (
	<>
        <NavLink to='sign-up' style={linkStyle}>
			Sign Up
        </NavLink>
        <NavLink to='sign-in' style={linkStyle}>
			Sign In
        </NavLink>
	</>
)

const alwaysOptions = (
	<>
		<NavLink to='/exhibitions' style={linkStyle}>
			Exhibitions
		</NavLink>
		<NavLink to='/departments' style={linkStyle}>
			Departments
		</NavLink>
		{/* For testing purposes, link to Artworks*/}
		<NavLink to='/artworks' style={linkStyle}>
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
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
