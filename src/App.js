import React, { Component, Fragment } from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Use from './components/Use';
import Setup from './components/Setup';

import 'sanitize.css';
import './css/styles.min.css';

const imgPath = `${process.env.PUBLIC_URL}/img/`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <img
            src={`${imgPath}comic-slack.png`}
            alt="Comic Slack logo"
            width="50"
          />
          <div>
            <h1 className="m_t_0 m_b_0">Comic Slack</h1>
            {/* <h3>Use comic sans in Slack! (sorta)</h3> */}
          </div>
        </header>

        <div id="compose" className="use-wrap wrapper">
          <Use />
        </div>
        <div id="setup" className="setup-wrap wrapper">
          <Setup />
        </div>
      </Fragment>
    );
  }
}

export default App;
