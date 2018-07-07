import React from 'react'
import PropTypes from 'prop-types'


function Drink(props){
  const drinkInformation =
    <div>
      <h3>{props.name}</h3>
      <p>{props.brewer}</p>
      <p>{props.description}</p>
      <p>{props.abv}</p>
      <p>{props.price}</p>
      <p>{props.remaining}</p>
      <h4>{props.formattedWaitTime}</h4>
    </div>
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onDrinkSelection(props.drinkId)}}>
        {drinkInformation}
      </div>
    )
  } else {
    return (
      <div>
        {drinkInformation}
      </div>
    )
  }
}

Drink.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onDrinkSelection: PropTypes.func,
  drinkId: PropTypes.string.isRequired
}


export default Drink
