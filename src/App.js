import React, { Component, Fragment } from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Use from './components/Use';
import Setup from './components/Setup';

import 'sanitize.css';
import './css/styles.scss';
import logo from './img/comic-slack.png';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <img src={logo} alt="Comic Slack logo" width="50" />
          <div>
            <h1 className="m_t_0 m_b_0">
              Comic Slack - (Fork of{' '}
              <a href="https://liamjohnston.github.io/comic-slack/">
                @liamjohnston's Comic-Slack
              </a>{' '}
              )
            </h1>
          </div>
        </header>

        <main>
          <div id="compose" className="use-wrap wrapper">
            <Use />
          </div>
          <div id="setup" className="setup-wrap wrapper">
            <Setup />
          </div>
        </main>
      </Fragment>
    );
  }
}

export default App;
