import React, { Component } from 'react';
import BtnValidate from './BtnValidate'
import BtnDelete from './BtnDelete'

class ItemTodo extends Component {

  state = {
    isValidate: false
  }

  validate = event => {
    event.stopPropagation();

    const validation = this.state.isValidate;
    const result = !validation ? true : false;
    this.setState({isValidate: result});
  }

  delete = (event, index) => {
    event.stopPropagation();

    const { deleteItem = f => f } = this.props;
    deleteItem(index);
  }

  render() {
    const { todo, index, selectItem } = this.props;
    const { isValidate } = this.state;

    const className = `list-todo__list ${isValidate ? 'validate' : ''}`;

    return (
      <li onClick={(event) => selectItem(index)}
          className={ className }>
        <BtnDelete index={index} onClick={this.delete} />
          {todo}
        <BtnValidate onClick={this.validate} />
      </li>
    );
  }
}

export default ItemTodo;
