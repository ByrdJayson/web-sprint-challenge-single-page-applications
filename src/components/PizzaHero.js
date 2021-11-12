import React from 'react';
import { Link } from 'react-router-dom';
export default function PizzaHero(){

  return (
    <div className='hero-div'>
      Pizza Hero In Progress!
      <Link to='/pizza' id='order-pizza'>Pizza?</Link>
    </div>
  )
}
