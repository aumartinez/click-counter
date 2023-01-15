import React from 'react';
import '../css/button.css';

function Button({text, isClickBtn, clickHandler}) {
  return(
    <button
    className={isClickBtn ? 'btn-click' : 'btn-reset'}
    onClick={clickHandler}
    >
      {text}
    </button>
  );
}

export default Button;