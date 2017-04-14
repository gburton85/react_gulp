import React from 'react';

const Response = ({ response }) => {
  return (

<div className="col-md-6">
  <div className="panel panel-default style3">
    <div className="panel-heading">
     <h3 className="panel-title">Your response</h3>
    </div>
    <div className="panel-body">
      <h2>You have {response} your acceptance of the offer</h2>
      <button className="btn btn-default">VIEW COMMENTS</button>
      <p className="date">Date:24/10/2013<span>Time: 21.05</span></p>
    </div>
  </div>
</div>

);
};

Response.propTypes = {
  response: React.PropTypes.string,
};

export default Response;
