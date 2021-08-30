import React from "react";
import "./style.css";

export function Button({ onClick, children, type, disabled }) {
  return (
    <button
      onClick={onClick}
      className='form__button'
      aria-label={children}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
