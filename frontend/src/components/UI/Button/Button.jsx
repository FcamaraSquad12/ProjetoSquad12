import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const UIButton = ({ onClick, to, theme, rounded, children, className, ...restProps }) => {
  const Component = to ? Link : 'button';

  return (
    <Component
      {...restProps}
      className={""}
      onClick={onClick}
      to={to}
    >
      {children}
    </Component>
  )
}

export default UIButton;
