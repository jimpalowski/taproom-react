import React from 'react'
import PropTypes from 'prop-types'

function DrinkDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedDrink.name} - {props.selectedDrink.brewer}</h1>
      <h2>Submitted {props.selectedDrink.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedDrink.price}</em></h4>
    </div>
  );
}

DrinkDetail.propTypes = {
  selectedDrink: PropTypes.object
}

export default DrinkDetail
