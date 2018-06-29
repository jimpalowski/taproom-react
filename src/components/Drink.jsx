import React from 'react'
import PropTypes from 'prop-types'


function Drink(props){
  return(
    <div>
      <h3>{props.name}</h3>
      <p>{props.brewer}</p>
      <p>{props.description}</p>
      <p>{props.abv}</p>
      <p>{props.price}</p>
      <p>{props.remaining}</p>
    </div>
  )
}

Drink.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string
}

export default Drink
