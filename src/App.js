import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PizzaHero from './components/PizzaHero';
import PizzaForm from './components/PizzaForm';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from './validation/formSchema';

const initialFormValues = {
  name: '',
  banana: false,
  pineapple: false,
  mushroom: false,
  olive: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  size: ''
}

const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [orders, setOrders] = useState([]);

  const validation = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: ''});
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })
  }

  const change = (name, value) => {
    validation(name, value);
    setFormValues({...formValues, [name]: value});
  }

  const submit = () => {
    axios.post('https://reqres.in/api/orders', formValues)
    .then(res => {
      setOrders([...orders, res.data]);
      console.log(res.data);
    })
    .catch(err => {
      console.error(err);
    })
    .finally(setFormValues(initialFormValues))
  }

  return (
    <>
      <Header />
      <Switch>
        <Route path='/pizza'>
          <PizzaForm change={change} submit={submit} values={formValues} errors={formErrors} orders={orders}/>
        </Route>
        <Route path='/'>
          <PizzaHero />
        </Route>
      </Switch>
    </>
  );
};
export default App;
