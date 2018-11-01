import React from 'react';

const BtnSwitchEditToAdd = ({addTodo, modifieItem, hasSwitch, currentIndex = null}) => {
  console.log(hasSwitch);

  return (
    <div>
      {!hasSwitch ? (
        <button type="button" onClick={(event) => addTodo()}>Add Item</button>
      ) : (
        <button type="button" onClick={(event) => modifieItem(currentIndex)}>Modifie Item</button>
      )}
    </div>
  );
}

export default BtnSwitchEditToAdd;
