import React from 'react';
import Responsive from 'react-responsive';
import PropTypes from 'prop-types';

export const Lg = ({ children }) => (<Responsive minWidth={992}>
  {children}
</Responsive>);

Lg.propTypes = {
  children: PropTypes.string.isRequired,
};

export const XsMd = ({ children }) =>
  (<Responsive maxWidth={991}>
    {children}
  </Responsive>);

XsMd.propTypes = {
  children: PropTypes.string.isRequired,
};

export const Xs = ({ children }) =>
  (<Responsive maxWidth={767}>
    {children}
  </Responsive>);

Xs.propTypes = {
  children: PropTypes.string.isRequired,
};
