import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// components
import Home from './components/home';
// theme
import customTheme from './styles/customTheme';

function App() {
  const theme = extendTheme(customTheme);
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
