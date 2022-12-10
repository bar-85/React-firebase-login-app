import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import Navbar from './components/Navbar'
import Auth from './pages/Auth'
import Home from './pages/Home'
import 'react-toastify/dist/ReactToastify.css'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { useEffect, useState } from 'react'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
	const [users, setUsers] = useState(null)

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				const uid = user.uid
				console.log(uid)
				setUsers(user)
			} else {
			}
		})
	}, [])
	return (
		<div className='App'>
			<BrowserRouter>
				<ScrollToTop>
					{users?.accessToken && <Navbar />}
					<Routes>
						<Route path='/' element={<Auth />} />
						<Route path='/dashboard' element={<Home users={users}/>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
			<ToastContainer position='top-right' autoClose={5000} theme='light' />
			<ToastContainer />
		</div>
	)
}

export default App
