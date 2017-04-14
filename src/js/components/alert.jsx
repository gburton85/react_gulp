import React from 'react';

const Alert = ({ status }) => {
  return (

  <div className="row">
    <div className="col-md-12">
      <div className="alert alert-danger" role="alert">
        <strong>Status:</strong> {status}
      </div>
    </div>
  </div>

  );
};

Alert.propTypes = {
  status: React.PropTypes.string,
};

export default Alert;
