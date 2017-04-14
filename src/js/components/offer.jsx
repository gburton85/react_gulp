import React from 'react';

const Offer = ({ offer }) => {
  return (

<div className="col-md-6">
  <div className="panel panel-default style2">
    <div className="panel-heading">
     <h3 className="panel-title">Buyer's offer</h3>
    </div>
    <div className="panel-body">
      <h2>£{offer}</h2>
      <p className="small">Subject to offer qualification by Purplebricks</p>
      <button className="btn btn-default">VIEW COMMENTS</button>
      <p className="date">Date:24/10/2013<span>Time: 20.17</span></p>
    </div>
  </div>
</div>

);
};

Offer.propTypes = {
  offer: React.PropTypes.string,
};

export default Offer;
