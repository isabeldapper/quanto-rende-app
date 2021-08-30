import React from "react";
import "./style.css";

export function RadioButton({ label, name, value, onChange }) {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <div>
      <>
        <input
          id={name}
          name={name}
          value={value}
          type='radio'
          aria-label={label}
          onChange={handleChange}
          className='form__input-checkbox'
          autoComplete='off'
        />
        <label htmlFor={name} className='form__label-checkbox'>
          {label}
        </label>
      </>
    </div>
  );
}
