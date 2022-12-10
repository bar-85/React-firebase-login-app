import React, { useState } from 'react'
import { Wrapper, Nav, Hamburger, Logout } from '../styles/components/Navbar.styles'
import LogoNavbar from '../components/LogoNavbar'
import { FaBars, FaTimes } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

const Navbar = () => {
	const [click, setClick] = useState(false)
	const handleClick = () => setClick(!click)

	const closeMenu = () => setClick(false)

	const logoutFunc = async () => {
		toast.success('Następuje wylogowanie...')
		await signOut(auth)
		setTimeout(() => {
			window.location = '/'
		}, 5000)

	}	

	return (
		<Wrapper>
			<LogoNavbar />
			<Hamburger onClick={handleClick}>
				{click ? <FaTimes size={32} style={{ color: 'white' }} /> : <FaBars size={32} style={{ color: 'white' }} />}
			</Hamburger>
			<Nav className={click ? 'header-menu active' : 'header-menu'}>
				<div onClick={logoutFunc} >
				<Logout className='navbar-right' onClick={closeMenu}>
					Wyloguj
				</Logout>
				</div>
			</Nav>
		</Wrapper>
	)
}

export default Navbar
