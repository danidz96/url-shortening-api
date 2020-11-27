import React from 'react';

function Button(props) {
  return (
    <button
      type="button"
      className={`${props.className} bg-cyan py-2 px-5 text-white hover:bg-opacity-50 font-bold`}
    >
      {props.children}
    </button>
  );
}

export default Button;
