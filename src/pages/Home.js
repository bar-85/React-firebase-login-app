import React from 'react'
import { Wrapper, Welcome } from '../styles/pages/Home.styles'

const Home = ({ users }) => {
	return (
		<Welcome>
			<Wrapper>
        <div>Witaj</div>
				<span>{users?.email}</span>
			</Wrapper>
		</Welcome>
	)
}

export default Home
