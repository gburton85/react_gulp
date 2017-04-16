import React from 'react';

const Negotiations = ({ agent }) => {
  return (

<div className="row pageEnd">
  <div className="col-md-12">
    <div className="panel panel-default style1">
      <div className="panel-heading">
       <h3 className="panel-title">Re-open negotiations</h3>
      </div>
      <div className="panel-body">
        <div className="row thumbnail">
          <div className="col-sm-9">
            <span>Would you like your Expert, {agent}, to negotiate on your behalf? It's completely free!</span>
          </div>
          <div className="col-sm-3">
            <button className="btn btn-default btn-purple pull-right">NEGOTIATE FOR ME </button>
          </div>
        </div>
        <h3 className="marginLeft">Enter an offer your would be willing to except:</h3>
        <div className="submit">
          <form className="form-group form-inline">
            <label htmlFor="price" className="hidden-xs"><img src="build/img/icon-pound.jpg" /></label>
            <input type="text" className="form-control" id="price" />
            <span id="info" className="hiddenInfo info">Please enter your offer in &pound; integer's.</span>
            <button className="btn btn-submit btn-lg pull-right" type="button">SUBMIT OFFER</button>
          </form>
        </div>
        <button className="btn btn-default btn-purple marginLeft">ADD COMMENTS</button>
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
