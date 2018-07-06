import React from 'react'
import PropTypes from 'prop-types'
import { v4 }



function NewDrinkForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Drink'/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer'/>
        <textarea
          id='issue'
          placeholder='Describe your Drink'/>
        <button type='submit'>Submit Drink!</button>
      </form>
    </div>
  )
}

export default NewDrinkForm
