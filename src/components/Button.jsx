import React from "react";

import './styles/Button.css';

const Button = ({ children, ...rest }) => {
return <button  {...rest}>{children}</button>;
};

export default Button;
