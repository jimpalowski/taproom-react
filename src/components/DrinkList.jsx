import React from 'react'
import Drink from './Drink'
import PropTypes from 'prop-types'

function DrinkList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.drinkList).map(function(drinkId) {
        var drink = props.drinkList[drinkId]
        return <Drink name={drink.name}
          location={drink.location}
          brewer={drink.brewer}
          description={drink.description}
          abv={drink.abv}
          price={drink.price}
          remaining={drink.remaining}
          formattedWaitTime={drink.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          onDrinkSelection={props.onDrinkSelection}
          drinkId={drink.id}
          key={drink.id} />;
      })}
    </div>
  )
}

DrinkList.propTypes = {
  drinkList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onDrinkSelection: PropTypes.func
}

export default DrinkList
