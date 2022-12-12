import styled from 'styled-components'

export const Welcome = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	height: 80vh;
	
	div {
		margin-bottom: 0.5rem;
	}

	span {
		font-weight: bold;
		margin: 1rem;
		color: rgb(182, 52, 179);
	}

	@media screen and (max-width: 900px) {
		font-size: 1rem;
		
	}
`
export const Wrapper = styled.div`
	padding: 10px;
	border-radius: 10px;
	box-shadow: 0px 3px 5px rgb(69, 0, 68);
`