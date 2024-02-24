import React from "react";
function Header({ text, className, ...rest }) {
  return (
    <label
      className={`block text-body1Size font-subTitle2Weight leading-6 text-gray-900 ${className}`}
      {...rest}
    >
      {text}
    </label>
  );
}

export default Header;
