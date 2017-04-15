import React from 'react';

const BuyerDetails = ({ name }) => {
  return (

<div className="row">
  <div className="col-md-12">
    <div className="panel-group style2" id="accordion" role="tablist" aria-multiselectable="true">
      <div className="panel panel-default">
        <div className="panel-heading" role="tab" id="headingOne">
          <h3 className="panel-title">
            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#cOne" aria-expanded="true" aria-controls="collapseOne">
              Buyer's details <span className="pull-right light">HIDE <i className="fa fa-angle-up" aria-hidden="true"> </i></span>
            </a>
          </h3>
        </div>
        <div id="cOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
          <div className="panel-body">
            <table className="table table-condensed table-borderless">
               <tbody>
                 <tr>
                   <th className="col-xs-2">Name:</th>
                   <td className="col-xs-10">{name}</td>
                 </tr>
                 <tr>
                   <th className="col-xs-2">Buying position:</th>
                   <td className="col-xs-10">Property to sell - 20 weeks on the market</td>
                 </tr>
                 <tr>
                   <th className="col-xs-2">Financial position:</th>
                   <td className="col-xs-10">Mortgage required - approved</td>
                 </tr>
                 <tr>
                   <th className="col-xs-2">Timescale</th>
                   <td className="col-xs-10">Would like to move in 10 weeks - no chain</td>
                 </tr>
               </tbody>
             </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

);
};

BuyerDetails.propTypes = {
  name: React.PropTypes.string,
};

export default BuyerDetails;
