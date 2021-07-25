import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 0 30px 0;
    padding: 0;
    background: #fdfdfd;
    font-family: 'Montserrat', sans-serif;
  }

	button {
		font-family: 'Nunito Sans', sans-serif;
		font-weight: 700;
	}
`;

export default GlobalStyle;
