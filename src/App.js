import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PizzaHero from './components/PizzaHero';
import PizzaForm from './components/PizzaForm';


const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/pizza'>
          <PizzaForm/>
        </Route>
        <Route path='/'>
          <PizzaHero />
        </Route>
      </Switch>
    </>
  );
};
export default App;
