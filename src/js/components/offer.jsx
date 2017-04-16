import React from 'react';

const Offer = ({ offer }) => {
  return (

<div className="col-md-6">
  <div className="panel panel-default style4">
    <div className="panel-heading">
     <h3 className="panel-title">Buyer's offer</h3>
    </div>
    <div className="panel-body">
      <h3>£{offer}</h3>
      <p className="small">Subject to offer qualification by Purplebricks</p>
      <button className="btn btn-grey">VIEW COMMENTS</button>
      <p className="date pull-right">Date: 24/10/2013 <span>Time: 20.17</span></p>
    </div>
  </div>
</div>

);
};

Offer.propTypes = {
  offer: React.PropTypes.string,
};

export default Offer;
