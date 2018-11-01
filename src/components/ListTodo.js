import React, { Component } from 'react';
import ItemTodo from './ItemTodo';
import Input from './Input';
import BtnSwitchEditToAdd from './BtnSwitchEditToAdd';

class ListTodo extends Component {

  state = {
    items : ['Premiére todo', 'Deuxiéme todo', 'Troisiéme todo'],
    value: 'Add a task',
    hasSwitch: false,
    currentIndex: ''
  }

  inputChange = event => {
    this.setState({value: event.target.value})
  }

  resetValue = event => {
    this.setState({value: 'Add a task'})
  }

  deleteItem = index => {
    const items = [...this.state.items];
    const newArray = items.filter( (item, i) => i !== index);

    this.setState({items: newArray});
    this.setState({value: 'Add a task'});
  }

  selectItem = index => {
    const items = [...this.state.items];
    const itemDesired = items[index];

    this.setState({value: itemDesired});
    this.setState({currentIndex: index});
  }

  addTodo = event => {
     const newItem = this.state.value;
     const newArray = [newItem, ...this.state.items]

     this.setState({items: newArray});
  }

  modifieItem = index => {
    const value = this.state.value;
    const items = [...this.state.items];

    const newArray = items.map((item, i) => {
      if (i === index) return item = value;
      else return item;
    });

    this.setState({items: newArray});
    this.setState({hasSwitch: false});
    this.setState({value: 'Add a task'});
    this.setState({currentIndex: ''});
  }

  changeBtnAddToEdit = event => {
    const currentIndex = this.state.currentIndex;
    if(currentIndex) this.setState({hasSwitch: true});

    else this.setState({value: ''});
  }


  render() {
    const { items, value, hasSwitch, currentIndex } = this.state;

    return (
      <div className="list-todo">
        <Input
          onChange={this.inputChange}
          onFocus={this.changeBtnAddToEdit}
          onBlur={this.resetValue}
          value={value}
        />
        {items.map((item, index) =>
          <ItemTodo
            key={index}
            todo={item}
            index={index}
            deleteItem={this.deleteItem}
            selectItem={this.selectItem}
          />
        )}
        <BtnSwitchEditToAdd
          hasSwitch={hasSwitch}
          currentIndex={currentIndex}
          addTodo={this.addTodo}
          modifieItem={this.modifieItem}
         />
      </div>
    )
  }
}

export default ListTodo;
