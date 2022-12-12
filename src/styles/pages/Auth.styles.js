import styled from 'styled-components'

export const Title = styled.div`
	font-weight: bold;
	font-size: 2rem;
	margin: 1rem;
	color: rgb(69, 0, 68);
`

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 75vh;
	width: 100%;
`
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 500px;
	width: 93%;
`
export const Box = styled.div`
	width: 100%;
	padding: 50px;
	border: 1px solid black;
	border-radius: 10px;
	box-shadow: 5px 2px 15px black;

	h2 {
		text-transform: uppercase;
	}

	input {
		width: 100%;
		padding: 10px;
		margin: 10px auto;
		outline: none;
		font-size: 16px;
		border: 1px solid rgb(69, 0, 68);
		border-radius: 4px;
	}

	div {
		width: 100%;
		border: 1px solid rgb(69, 0, 68);
		padding: 10px;
		text-align: center;
		margin: 10px auto;
		border-radius: 4px;
		cursor: pointer;

		.googleFc {
			margin-right: 0.3rem;
		}
	}

	p {
		cursor: pointer;
		color: purple;
		font-size: 16px;
		margin: 25px auto;
		font-weight: bold;
	}

	button {
		width: 100%;
		border: 1px solid rgb(69, 0, 68);
		padding: 10px;
		text-align: center;
		margin: 10px auto;
		border-radius: 4px;
		background-color: rgb(69, 0, 68);
		color: white;
		cursor: pointer;
		font-size: 16px;
	}

	@media screen and (max-width: 320px) {
		font-size: 0.8rem;
		}
`
