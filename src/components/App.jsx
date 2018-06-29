import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Header from './Header'
import DrinkList from './DrinkList'
import NewDrinkForm from './NewDrinkForm'

function App(){
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={DrinkList} />
      <Route path='/newdrink' component={NewDrinkForm} />
      </Switch>
    </div>
  )
}

export default App
