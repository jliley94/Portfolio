import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import * as config from './config';
import HeaderLink from './components/HeaderLink';

// import './App.css';
import './styles/App.scss';

library.add(fab, faEnvelope); 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="pageTitle">Joshua Liley</h1>

          <HeaderLink link={config.links.linkedIn} icon={['fab', 'linkedin']} />
          <HeaderLink link={config.links.gitHub} icon={['fab', 'github']} />
          <HeaderLink link={config.links.email} icon="envelope" />
        
        </header>
      </div>
    );
  }
}

export default App;
