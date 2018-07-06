import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import DrinkList from './DrinkList'
import NewDrinkForm from './NewDrinkForm'
import logo from '../assets/images/logo.png'


function App(){
  return (
    <div>
      <style global jsx>{`
        body{
          background-image:url("https://art.ngfiles.com/images/319000/319689_zeedox_bar-background-art.png?f1410841851");
          background-size:     cover;                      /* <------ */
          background-repeat:   no-repeat;
          background-position: center center;
          color:white;
          text-align:center;
        }
      `}
      </style>
      <img src={logo}/>
      <Header/>
      <Switch>
        <Route exact path='/' component={DrinkList} />
        <Route path='/newdrink' component={NewDrinkForm} />
      </Switch>
    </div>
  )
}

export default App
