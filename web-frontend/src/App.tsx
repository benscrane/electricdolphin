import React from 'react';
import { setWindowTitle } from './utils';
import { Grommet } from 'grommet';
import { NavBar } from './core/Navigation';

const App = () =>  {
  setWindowTitle('Digital Elephant');

  const theme = {
    global: {
      font: {
        size: '14px',
        height: '20px',
      }
    }
  }

  return (
    <Grommet theme={theme}>
      <NavBar />
      <h2>Test</h2>
    </Grommet>
  );
};

export default App;
