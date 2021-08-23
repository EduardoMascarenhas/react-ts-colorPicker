import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from './utils/usePersistedState';
import darkBlue from "./styles/themes/dark/blue";
import darkBlue2 from "./styles/themes/dark/blue2";
import darkBlue3 from "./styles/themes/dark/blue3";
import darkGreen from "./styles/themes/dark/green";
import darkGreen2 from "./styles/themes/dark/green2";
import darkGrey from "./styles/themes/dark/grey";
import darkOrange from "./styles/themes/dark/orange";
import darkPurple from "./styles/themes/dark/purple";
import darkPurple2 from "./styles/themes/dark/purple2";
import darkRed from "./styles/themes/dark/red";
import darkRed2 from "./styles/themes/dark/red2";
import darkYellow from "./styles/themes/dark/yellow";
import lightBlue from "./styles/themes/light/blue";
import lightBlue2 from "./styles/themes/light/blue2";
import lightBlue3 from "./styles/themes/light/blue3";
import lightGreen from "./styles/themes/light/green";
import lightGreen2 from "./styles/themes/light/green2";
import lightGrey from "./styles/themes/light/grey";
import lightOrange from "./styles/themes/light/orange";
import lightPurple from "./styles/themes/light/purple";
import lightPurple2 from "./styles/themes/light/purple2";
import lightRed from "./styles/themes/light/red";
import lightRed2 from "./styles/themes/light/red2";
import lightYellow from "./styles/themes/light/yellow";
import GlobalStyle from './styles/global';
import Header from './components/Header';
import ColorSwitcher from './components/ColorSwitcher';


const App = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', darkBlue);

  const setTemaNovo = (t: any) => {
    if (t === 'dark-blue') {
      setTheme(darkBlue);
    }
    if (t === 'dark-blue-2') {
      setTheme(darkBlue2);
    }
    if (t === 'dark-blue-3') {
      setTheme(darkBlue3);
    }
    if (t === 'dark-green') {
      setTheme(darkGreen);
    }
    if (t === 'dark-green-2') {
      setTheme(darkGreen2);
    }
    if (t === 'dark-grey') {
      setTheme(darkGrey);
    }
    if (t === 'dark-orange') {
      setTheme(darkOrange);
    }
    if (t === 'dark-purple') {
      setTheme(darkPurple);
    }
    if (t === 'dark-purple-2') {
      setTheme(darkPurple2);
    }
    if (t === 'dark-red') {
      setTheme(darkRed);
    }
    if (t === 'dark-red-2') {
      setTheme(darkRed2);
    }
    if (t === 'dark-yellow') {
      setTheme(darkYellow);
    }
    if (t === 'light-blue') {
      setTheme(lightBlue);
    }
    if (t === 'light-blue-2') {
      setTheme(lightBlue2);
    }
    if (t === 'light-blue-3') {
      setTheme(lightBlue3);
    }
    if (t === 'light-green') {
      setTheme(lightGreen);
    }
    if (t === 'light-green-2') {
      setTheme(lightGreen2);
    }
    if (t === 'light-grey') {
      setTheme(lightGrey);
    }
    if (t === 'light-orange') {
      setTheme(lightOrange);
    }
    if (t === 'light-purple') {
      setTheme(lightPurple);
    }
    if (t === 'light-purple-2') {
      setTheme(lightPurple2);
    }
    if (t === 'light-red') {
      setTheme(lightRed);
    }
    if (t === 'light-red-2') {
      setTheme(lightRed2);
    }
    if (t === 'light-yellow') {
      setTheme(lightYellow);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <ColorSwitcher setTemaNovo={setTemaNovo} />
      </div>
    </ThemeProvider>
  );
}

export default App;
