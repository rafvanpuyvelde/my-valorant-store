import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  div#root {
    height: 100vh;
    min-width: 320px;
    font-family: ${theme`fontFamily.lexend`};
    color: ${theme`colors.white`};
  }

	body {
		-webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
	}
`;

const GlobalStyles: React.FC = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
