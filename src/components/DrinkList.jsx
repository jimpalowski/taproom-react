import React from 'react'
import Drink from './Drink'


var masterDrinkList = [
  {
    name: 'Ruby Zozzle',
    brewer: 'Hi-Wheel',
    description: 'Sparkling Wine & Grapefruit',
    abv: '6.8%',
    price: '7',
    remaining: '20'
  },
  {
    name: 'Ruby Zozzle',
    brewer: 'Hi-Wheel',
    description: 'Sparkling Wine & Grapefruit',
    abv: '6.8%',
    price: '7',
    remaining: '20'
  },
  {
    name: 'Ruby Zozzle',
    brewer: 'Hi-Wheel',
    description: 'Sparkling Wine & Grapefruit',
    abv: '6.8%',
    price: '7',
    remaining: '20'
  },
  {
    name: 'Ruby Zozzle',
    brewer: 'Hi-Wheel',
    description: 'Sparkling Wine & Grapefruit',
    abv: '6.8%',
    price: '7',
    remaining: '20'
  },
]



function DrinkList(){
  return (
    <div>
      <hr/>
      {masterDrinkList.map((drink, index) =>
        <Drink name={drink.name}
          brewer={drink.brewer}
          description={drink.description}
          abv={drink.abv}
          price={drink.price}
          remaining{drink.remaining}
          key={index} />
      )}
    </div>
  )
}

export default DrinkList
