import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage'
import CartPage from './pages/cartpage'
import MenuPage from './pages/menupage'



const Router = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/menu' component={MenuPage} />
    <Route exact path='/cart' component={CartPage} />
  </Switch>
)

export default Router;
