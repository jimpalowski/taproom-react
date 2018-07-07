import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import DrinkList from './DrinkList'
import NewDrinkForm from './NewDrinkForm'
import logo from '../assets/images/logo.png'
import Error404 from './Error404'
import NewDrinkControl from './NewDrinkControl'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      masterDrinkList: {},
      selectedDrink: null
    }
    this.handleAddingNewDrinkToList = this.handleAddingNewDrinkToList.bind(this)
    this.handleChangingSelectedDrink = this.handleChangingSelectedDrink.bind(this)
  }

  handleAddingNewDrinkToList(newDrink){
    var newMasterDrinkList = Object.assign({}, this.state.masterDrinkList, {
      [newDrink.id]: newDrink
    })
    newMasterDrinkList[newDrink.id].formattedWaitTime = newMasterDrinkList[newDrink.id].timeOpen.fromNow(true)
    this.setState({masterDrinkList: newMasterDrinkList})
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateDrinkElapsedWaitTime(),
    5000
    )
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer)
  }

  updateDrinkElapsedWaitTime() {
    var newMasterDrinkList = Object.assign({}, this.state.masterDrinkList)
    Object.keys(newMasterDrinkList).forEach(drinkId => {
      newMasterDrinkList[drinkId].formattedWaitTime = (newMasterDrinkList[drinkId].timeOpen).fromNow(true)
    })
    this.setState({masterDrinkList: newMasterDrinkList})
  }

  handleChangingSelectedDrink(drinkId){
    this.setState({selectedDrink: drinkId})
  }
  render(){
    return (
      <div>
        <style global jsx>{`
        body{
          background-image:url("https://art.ngfiles.com/images/319000/319689_zeedox_bar-background-art.png?f1410841851");
          background-size:     cover;                      /* <------ */
          background-repeat:   no-repeat;
          background-position: center center;
          color: lightgrey;
          text-align:center;
        }
      `}
        </style>
        <img src={logo}/>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><DrinkList drinkList={this.state.masterDrinkList} />} />
          <Route path='/newdrink' render={()=><NewDrinkControl onNewDrinkCreation={this.handleAddingNewDrinkToList} />} />


          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}
export default App
