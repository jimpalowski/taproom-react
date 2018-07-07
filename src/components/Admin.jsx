import React from 'react'
import PropTypes from 'prop-types'
import DrinkList from './DrinkList'
import DrinkDetail from './DrinkDetail'


function Admin(props){
  let optionalSelectedDrinkContent = null;
  if (props.selectedDrink != null){
    optionalSelectetDrinkContent =  <DrinkDetail selectedDrink={props.drinkList[props.selectedDrink]}/>;
  }
  return (
    <div>
      <h2>Admin</h2>
      <DrinkDetail />
      <DrinkList
        drinkList={props.drinkList}
        currentRouterPath={props.currentRouterPath}
        onDrinkSelection={props.onDrinkSelection}/>
    </div>
  )
}

Admin.propTypes = {
  drinkList: PropTypes.array,
  selectedDrink: PropTypes.string,
  currentRouterPath: PropTypes.string.isRequired,
  onDrinkSelection: PropTypes.func.isRequired
}
export default Admin
