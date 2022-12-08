import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
    height: 50px;
    align-items: center;
    padding: 10px;
    background-color: purple;
    color: white;

	@media screen and (max-width: 900px) {
		max-width: 100%;
	}
`

export const Hamburger = styled.div`
	display: none;

	@media screen and (max-width: 900px) {
		position: fixed;
		display: block;
		right: 1rem;
		z-index: 20;
	}
`
export const Nav = styled.div`
	&.header-menu {
		align-items: center;
		display: flex;
		list-style: none;
		gap: 2rem;
	}

	@media screen and (max-width: 900px) {
		&.header-menu {
			position: fixed;
			flex-direction: column;
			right: -100%;
			top: 100px;
			text-align: center;
			background-color: white;
            color: black;
			width: 40%;
			height: auto;
			border-top-left-radius: 40px;
			border-bottom-left-radius: 40px;
			border: 2px solid purple;
			transition: 0.3s;
			z-index: 999;
		}

		@media screen and (max-width: 320px) {
			&.header-menu {
				top: 20%;
				gap: 1rem;
                width: 50%;
			}
		}

		&.header-menu.active {
			right: -3px;
		}
	}
`

export const Logout = styled.div`
    margin: 2rem;
    font-size: 1.2rem;
    cursor: pointer;
`