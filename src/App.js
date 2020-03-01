import React from 'react';
import Routing from 'router';
import { ThemeProvider } from 'styled-components';
// import GlobalStyles from 'styles';
import variables from 'variables';

const App = () => (
  <ThemeProvider theme={variables}>
    {/* <GlobalStyles /> */}
    <Routing />
  </ThemeProvider>
);

export default App;
