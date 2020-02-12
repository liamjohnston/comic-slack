import React, { Fragment } from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Use from './components/Use';
import Setup from './components/Setup';

import 'sanitize.css';
import './css/styles.scss';
import logo from './img/comic-slack.png';

function fetchSimilarHeaders(callback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === XMLHttpRequest.DONE) {
      //
      // The following headers may often be similar
      // to those of the original page request...
      //
      if (callback && typeof callback === 'function') {
        callback(request.getAllResponseHeaders());
      }
    }
  };

  //
  // Re-request the same page (document.location)
  // We hope to get the same or similar response headers to those which
  // came with the current page, but we have no guarantee.
  // Since we are only after the headers, a HEAD request may be sufficient.
  //
  request.open('HEAD', document.location, true);
  console.log('request: ', request);
  request.send(null);
}

const App = () => {
  fetchSimilarHeaders();
  return (
    <Fragment>
      <header className="header">
        <img src={logo} alt="Comic Slack logo" width="50" />
        <div>
          <h1 className="m_t_0 m_b_0">Comic Slack</h1>
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
};

export default App;
