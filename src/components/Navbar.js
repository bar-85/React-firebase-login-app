import React, { useState } from 'react'
import { Wrapper, Nav, Hamburger, Logout } from '../styles/components/Navbar.styles'
import LogoNavbar from '../components/LogoNavbar'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)

	const closeMenu = () => setClick(false)

	return (
		<Wrapper>
			<LogoNavbar />
			<Hamburger onClick={handleClick}>
				{click ? <FaTimes size={32} style={{ color: 'white' }} /> : <FaBars size={32} style={{ color: 'white' }} />}
			</Hamburger>
			<Nav className={click ? 'header-menu active' : 'header-menu'}>
				<Logout className='navbar-right' onClick={closeMenu}>
					Wyloguj
				</Logout>
			</Nav>
		</Wrapper>
	)
}

export default Navbar
