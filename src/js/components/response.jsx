import React from 'react';

const Response = ({ response }) => {
  return (

<div className="col-md-6">
  <div className="panel panel-default style3">
    <div className="panel-heading">
     <h3 className="panel-title">Your response</h3>
    </div>
    <div className="panel-body">
      <h3>You have {response} your acceptance of the offer</h3>
      <button className="btn btn-grey">VIEW COMMENTS</button>
      <p className="date pull-right">Date: 24/10/2013 <span>Time: 21.05</span></p>
    </div>
  </div>
</div>

);
};

Response.propTypes = {
  response: React.PropTypes.string,
};

export default Response;
