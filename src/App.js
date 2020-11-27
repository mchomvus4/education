import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router} from 'react-router-dom';
import Section from './components/Section/Section';

class App extends Component {
  render() {
    return (
      <Router>
            <div>
              <NavBar />
              <Section/>
            </div>
      </Router>
    );
  };
};

export default App


