import React from "react";
import "./style.css";

export function Input({label, name, value, type, onChange, children}) {

  function handleChange(event) {
    onChange(event.target.value)
  }

  return (
    <div className='form__input-box'>
      <label htmlFor={name} className='form__label'>
        {label}
      </label>
      <>
        <input
          id={name}
          name={name}
          value={value}
          type={type}
          aria-label={label}
          onChange={handleChange}
          placeholder={children}
          className='form__input'
          autoComplete='off'
        />
      </>
    </div>
  );
}
