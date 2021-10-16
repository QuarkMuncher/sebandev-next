import {createGlobalStyle, ThemeProvider} from 'styled-components';

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    line-height: 1.6;
    font-size: 16px;
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.tertiary};
  }
`;

export default function App({Component, pageProps}) {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

const theme = {
  colors: {
    primary: '#1d2029',
    secondary: '#bf052d',
    tertiary: '#f8f9fe',
    quaternary: '#25CED1'
  }
}
