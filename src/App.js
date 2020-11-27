import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import Section from './components/Section/Section'
import { BrowserRouter as Router} from 'react-router-dom';

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


