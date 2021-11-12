import React from "react";
import { Route } from 'react-router-dom';
import Header from './components/Header';


const App = () => {
  return (
    <>
    <Route path='/'>
      <Header />
    </Route>
    </>
  );
};
export default App;
