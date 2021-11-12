import React from 'react';
export default function PizzaForm(props){
  const { change, submit, errors } = props;
  const { name, size, banana, pineapple, mushroom, olive, special } = props.values;

  function onSubmit(e){
    e.preventDefault();
    submit();
  }

  function onChange(e){
    const { name, value, checked, type} = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    change(name, newValue);
  }
  return (
      <form id='pizza-form' onSubmit={onSubmit}>
        <input type='text' name='name' id='name-input' placeholder='Name' value={name} onChange={onChange}/>
        <select id='size-dropdown' name='size' value={size} onChange={onChange}>
          <option>Select a size</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>X-Large</option>
        </select>
        <label>
          <input type='checkbox' name='banana' value={banana} onChange={onChange}/> Banana Peppers
        </label>
        <label>
          <input type='checkbox' name='olive' value={olive} onChange={onChange}/> Black Olives
        </label>
        <label>
          <input type='checkbox' name='mushroom' value={mushroom} onChange={onChange}/> Mushrooms
        </label>
        <label>
          <input type='checkbox' name='pineapple'value={pineapple} onChange={onChange}/> Pineapple
        </label>
        <textarea id='special-text' placeholder='Instructions' value={special} onChange={onChange}></textarea>
        <input type='submit' value='Place Order!' name='submit'/>
      </form>

  )
}
