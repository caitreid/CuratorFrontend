import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers'
import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

const linkStyle = {
	color:'black',
    textDecoration: 'none',
	margin: '0 1rem',
}
const authenticatedOptions = (
	<>
		<NavLink className="mt-2" to='change-password' style={linkStyle}>
			Change Password
		</NavLink>
		<NavLink className="mt-2" to='sign-out'>
			Sign Out
		</NavLink>
	</>
)

const unauthenticatedOptions = (
	<div className='nav__auth'>
        <NavLink to='sign-up' className="mt-2" className='button button--outline' style={linkStyle}>
			Sign Up
        </NavLink>
        <NavLink to='sign-in' className="mt-2" className='button button--filled' style={linkStyle}>
			Sign In
        </NavLink>
	</div>
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
	<Navbar bg='white' className='nav' variant='dark' expand='md'>
		<Navbar.Brand className="mx-4 logo">
            <Link to='/' style={linkStyle}>
                Gallerie
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
