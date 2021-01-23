import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import home from './pages/home';
import meusPokemons from './pages/meusPokemons';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={home} />
        <Route path='/meusPokemons' component={meusPokemons} />
      </Switch>
    </BrowserRouter>
  )
}