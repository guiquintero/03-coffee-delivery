import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 130%;
    font-family: ${(props) => props.theme.text};
  }

  :focus{
    outline: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.base_text};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;