import React from 'react';

function Button(props) {
  return (
    <button
      type="button"
      {...props}
      className={`py-2 px-5 text-white font-bold ${props.className}`}
    ></button>
  );
}

export default Button;
