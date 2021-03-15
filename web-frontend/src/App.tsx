import React from 'react';
import { setWindowTitle } from './utils';
import { Grommet } from 'grommet';
import { NavBar } from './core/Navigation';
import { Theme } from './core/Theme';

const App = () =>  {
  setWindowTitle('Digital Elephant');

  return (
    <Grommet>
      <Theme>
      <NavBar />
      <h2>Test</h2>
      </Theme>
    </Grommet>
  );
};

export default App;
