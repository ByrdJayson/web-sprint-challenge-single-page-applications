import React from 'react';
export default function PizzaForm(props){
  function onSubmit(e){
    e.preventDefault();
  }

  function onChange(e){
    const { name, value, checked, type} = e.target;
    const newValue = type === 'checkbox' ? checked : value;
  }
  return (
      <form id='pizza-form' onSubmit={onSubmit}>
        <input type='text' name='name' id='name-input' placeholder='Name'/>
        <select id='size-dropdown' name='size'>
          <option>Select a size</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>X-Large</option>
        </select>
        <label>
          <input type='checkbox' name='banana'/> Banana Peppers
        </label>
        <label>
          <input type='checkbox' name='olive'/> Black Olives
        </label>
        <label>
          <input type='checkbox' name='mushroom'/> Mushrooms
        </label>
        <label>
          <input type='checkbox' name='pineapple'/> Pineapple
        </label>
        <textarea id='special-text' placeholder='Instructions'></textarea>
        <input type='submit' value='Place Order!' name='submit'/>
      </form>

  )
}
