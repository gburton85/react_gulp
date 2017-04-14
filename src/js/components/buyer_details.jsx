import React from 'react';

const BuyerDetails = ({ name }) => {
  return (

<div className="row">
  <div className="col-md-12">
    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
      <div className="panel panel-default">
        <div className="panel-heading" role="tab" id="headingOne">
          <h3 className="panel-title">
            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#cOne" aria-expanded="true" aria-controls="collapseOne">
              Buyer's details <span>HIDE</span>
            </a>
          </h3>
        </div>
        <div id="cOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
          <div className="panel-body">
            <table className="table table-hover">
               <tbody>
                 <tr>
                   <th>Name:</th>
                   <td>{name}</td>
                 </tr>
                 <tr>
                   <th>Buying position:</th>
                   <td>Property to sell - 20 weeks on the market</td>
                 </tr>
                 <tr>
                   <th>Financial position:</th>
                   <td>Mortgage required - approved</td>
                 </tr>
                 <tr>
                   <th>Timescale</th>
                   <td>Would like to move in 10 weeks - no chain</td>
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
