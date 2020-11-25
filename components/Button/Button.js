import React from 'react';

function Button(props) {
  return (
    <button
      type="button"
      className={`rounded-full bg-cyan py-2 px-5 text-white hover:bg-opacity-50 font-bold ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
