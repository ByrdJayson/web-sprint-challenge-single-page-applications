import React from 'react';
import { Link } from 'react-router-dom';
export default function PizzaHero(){

  return (
    <div className='hero-div'>
      <h2>Your favorite food, delivered while coding</h2>
      <Link to='/pizza' id='order-pizza'>Pizza?</Link>
    </div>
  )
}
