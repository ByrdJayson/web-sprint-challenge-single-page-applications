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
        </select>
      </form>

  )
}
