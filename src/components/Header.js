import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
  return (
    <header className='App-header'>
      <h1>Lambda Eats</h1>
      <nav className='nav-buttons'>
        <Link to='/'>Home</Link>
        <Link to='/help'>Help</Link>
      </nav>


    </header>
  )
}
