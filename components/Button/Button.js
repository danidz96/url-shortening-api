import React from 'react';

function Button(props) {
  return (
    <button
      type="button"
      className={`text-white font-bold lg:hover:text-violet-dark lg:text-violet-light ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
