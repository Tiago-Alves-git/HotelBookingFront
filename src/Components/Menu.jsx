/* eslint-disable require-jsdoc */
import PropTypes from 'prop-types';
import React from 'react';

const Menu = ({Logged}) => {
  if (Logged) {
    return (
      <div>Menu</div>
    );
  } else {
    return (
      <div> Not Logged </div>
    );
  }
};

Menu.propTypes = {
  Logged: PropTypes.bool.isRequired,
};

export default Menu;
