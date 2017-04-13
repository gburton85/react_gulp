import React from 'react';

const Header = ({ title }) => {
  return (
    <div>
       {title}
    </div>
  );
};

Header.propTypes = {
  title: React.PropTypes.string,
};

export default Header;
