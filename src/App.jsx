import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

// components
import Course from './components/course';
import Home from './components/home';
import Nav from './components/nav';
// theme
import customTheme from './styles/customTheme';

function App() {
  const theme = extendTheme(customTheme);
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Nav />
      <Router>
        <div className="App">
          <Switch>
            <Route path="/course/:courseId" component={Course} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
