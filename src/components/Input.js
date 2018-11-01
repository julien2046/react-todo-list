import React from 'react';

const Input = ({onChange, onBlur, onFocus, value}) => (
  <input className="list-todo__input"
      value={value}
      onChange={event => onChange(event)}
      onFocus={event => onFocus()}
      onBlur={evemt => onBlur()}
  />
);

export default Input;
