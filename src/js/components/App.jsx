import React from 'react';

import Header from './Header.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header title="Site title" />
          <div className="col-md-6">
            sup
          </div>
        </div>
      </div>
    );
  }
}
