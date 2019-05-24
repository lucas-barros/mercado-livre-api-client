import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
	* {
		box-sizing: border-box;
	}
  body {
		margin: 0;
		padding: 0;
    background-color: #f2f2f2;
    color: #333;
    display: flex;
		font-family: 'Roboto', sans-serif;
		font-size: 1rem;
	}
	h1 {
		font-size: 1.75rem;
  }
	h2 {
		font-size: 0.95rem;
	}
	html, body, #root {
		height: 100%;
		width: 100%;
	}
	.text-center {
		text-align: center;
	}
	.img-fluid {
		width: 100%;
		height: auto;
	}
`;

export default GlobalStyle;
