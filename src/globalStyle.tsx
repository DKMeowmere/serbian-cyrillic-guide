import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *,
	*::after,
	*::before {
		box-sizing: border-box;
		transition: all 0.3s ease-in-out;
	}
	body {
		padding: 0;
		margin: 0;
		overflow-x: hidden;
		font-size: 16px;
		font-family: "Roboto", sans-serif;
		background-color:#343434;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	ul,
	li,
	p {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}
`
