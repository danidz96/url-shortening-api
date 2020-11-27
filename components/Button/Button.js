import React from 'react';

function Button(props) {
  return (
    <button
      type="button"
      {...props}
      className={`${props.className} bg-cyan py-2 px-5 text-white hover:bg-cyan-light font-bold`}
    ></button>
  );
}

export default Button;
