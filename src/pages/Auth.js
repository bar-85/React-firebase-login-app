import React, { useState } from 'react'
import { Box, Container, Wrapper, Title } from '../styles/pages/Auth.styles'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { toast } from 'react-toastify'
import { auth } from '../firebase'
import { GoogleAuthProvider } from 'firebase/auth'
import { FcGoogle } from "react-icons/fc";

const provider = new GoogleAuthProvider()

const Auth = () => {
	const [signUp, setSignUp] = useState(true)
	const [authData, setAuthData] = useState({ email: '', password: '' })

	const onChangeFunc = e => {
		setAuthData({ ...authData, [e.target.name]: e.target.value })
	}

	const authFunc = async () => {
		if (signUp) {
			try {
        //register
				const data = await createUserWithEmailAndPassword(auth, authData.email, authData.password)
				const user = data.user
				if (user) {
					window.location = '/dashboard'
				}
			} catch (error) {
				toast.error(error.message)
			}
		} else {
			try { 
        //login
				const data = await signInWithEmailAndPassword(auth, authData.email, authData.password)
				const user = data.user
				if (user) {
					window.location = '/dashboard'
				}
			} catch (error) {
				toast.error(error.message)
			}
		}
	}

	const googleLogin = async () => {
		try {
			const data = await signInWithPopup(auth, provider)
			const credential = GoogleAuthProvider.credentialFromResult(data)
			const token = credential.accessToken
			console.log('Token : ', token)
			const user = data.user
			if (user) {
				window.location = '/dashboard'
			}
		} catch (error) {
			const credential = GoogleAuthProvider.credentialFromError(error)
			toast.error(credential)
		}
	}

	return (
		<>
			<Title>React Firebase</Title>
		<Wrapper>
			<Container>
				<Box>
					<h2>{signUp ? 'Rejestracja' : 'Logowanie'}</h2>
					<input name='email' value={authData.email} onChange={onChangeFunc} type='email' placeholder='Email' />
					<input name='password' value={authData.password} onChange={onChangeFunc} type='password' placeholder='Hasło' />
					<div onClick={googleLogin} className='google'>
						<FcGoogle className='googleFc' /> <span>Zaloguj się przez Google </span>
					</div>
					<p onClick={() => setSignUp(!signUp)}>{signUp ? 'Logowanie >>' : 'Załóż konto >>'}</p>
					<button onClick={authFunc}>{signUp ? 'Rejestracja' : 'Logowanie'}</button>
				</Box>
			</Container>
		</Wrapper>
		</>
	)
}

export default Auth
