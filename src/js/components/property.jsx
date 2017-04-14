import React from 'react';

const Property = ({ price }) => {
  return (

<div className="row">
  <div className="col-md-12">
    <div className="panel panel-default style1">
      <div className="panel-heading">
       <h3 className="panel-title">The property</h3>
      </div>
      <div className="panel-body">
        <div className="row">
          <div className="col-sm-2">
            <img src="http://placehold.it/150x150"/>
          </div>
          <div className="col-md-7">
            <h3>Eddington House, 16 Wigginton Road <br/>
              Tamworth, B79 8PB
            </h3>
          </div>
          <div className="col-md-3 text-right">
            <p>Asking price:</p>
            <h3>£{price}</h3>
            <button className="btn btn-default">VIEW EXTRAS INCLUDED</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

);
};

Property.propTypes = {
  price: React.PropTypes.string,
};

export default Property;
