import React from 'react';

export default function PizzaForm(props){

  return (
      <form id='pizza-form'>
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
        <submit type='submit'>Place Order!</submit>
      </form>

  )
}
