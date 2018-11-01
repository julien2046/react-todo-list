import React from 'react';

const BtnDelete = ({onClick, index}) => (
  <button onClick={(event) => onClick(event, index)} className='list-todo__btn-delete' type="button">&#10007;</button>
);

export default BtnDelete;
