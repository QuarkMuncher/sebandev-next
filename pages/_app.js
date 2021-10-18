import ThemeContext from '../Context';
import '../styles/global.scss';

const theme = {
  colors: {
    primary: '#1d2029',
    secondary: '#bf052d',
    tertiary: '#f8f9fe',
    quaternary: '#25CED1'
  }
};

export default function App({Component, pageProps}) {
  return (
    <ThemeContext.Provider value={theme}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
