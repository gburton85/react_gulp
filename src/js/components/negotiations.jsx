import React from 'react';

const Negotiations = ({ agent }) => {
  return (

<div className="row">
  <div className="col-md-12">
    <div className="panel panel-default style1">
      <div className="panel-heading">
       <h3 className="panel-title">Re-open negotiations</h3>
      </div>
      <div className="panel-body">
        <div className="row negotiate">
          <div className="col-md-10">
            <h4>Would you like your Expert, {agent}, to negotiate on your behalf? It's completely free!</h4>
          </div>
          <div className="col-md-2">
            <button className="btn btn-default btn-purple">NEGOTIATE FOR ME </button>
          </div>
        </div>
        <h3>Enter an offer your would be willing to except:</h3>
        <div className="submit">
          <form className="form-group form-inline">
            <label htmlFor="price">£: </label>
            <input type="text" className="form-control" id="price" />
            <button className="btn btn-default btn-submit" type="button">SUBMIT OFFER</button>
          </form>
        </div>
        <button className="btn btn-default btn-purple">ADD COMMENTS</button>
      </div>
    </div>
  </div>
</div>

);
};

Negotiations.propTypes = {
  agent: React.PropTypes.string,
};

export default Negotiations;
