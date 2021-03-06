import React from 'react';
import Alert from './alert.jsx';
import Property from './property.jsx';
import Offer from './offer.jsx';
import Response from './response.jsx';
import Negotiations from './negotiations.jsx';
import BuyerDetails from './buyer_details.jsx';


export default class App extends React.Component {
  render() {
    return (

    <div>

      <nav className="navbar navbar-default static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="container">
              <img className="brand" src="build/img/logo.png" />
              <h2 className="pull-right">Secure negotiation centre</h2>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">

          <Alert status="Withdrawn" />
          <Property price="189,950" />
          <BuyerDetails name="Mr David Shepherd"/>
        <div className="row">
          <Offer offer="179,000"/>
          <Response response="withdrawn"/>
        </div>
          <Negotiations agent="Robert White"/>

      </div>

        <footer>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <ul className="footerNav">
                    <li>CONTACT US</li>
                    <li>FAQ</li>
                    <li>JOIN THE TEAM</li>
                    <li>ABOUT US</li>
                    <li>LIVE HELP</li>
                  </ul>
                </div>
                <div className="col-md-4">
                <ul className="social smallLeft bigRight">
                  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
                  <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
                  <li><i className="fa fa-youtube" aria-hidden="true"></i></li>
                  <li><i className="fa fa-pinterest-p" aria-hidden="true"></i></li>
                  <li><i className="fa fa-google-plus" aria-hidden="true"></i></li>
                </ul>
              </div>
            </div>
            </div>
        </footer>

    {/* end container */}
  </div>
    );
  }
}
