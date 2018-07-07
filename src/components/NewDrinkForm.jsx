import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import Moment from 'moment';


function NewDrinkForm(props) {
  let _name = null
  let _brewer = null
  let _price = null
  let _abv = null
  let _description = null

  function handleNewDrinkFormSubmission(event) {
    event.preventDefault()
    props.onNewDrinkCreation({name: _name.value, brewer: _brewer.value, price: _price.value, abv: _abv.value, description: _description.value, id: v4(), timeOpen: new Moment()})
    _name.value = ''
    _brewer.value = ''
    _price.value = ''
    _abv.value = ''
    _description.value = ''
  }

  return (
    <div>
      <form onSubmit={handleNewDrinkFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Drink'
          ref={(input) => {_name = input}}/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer'
          ref={(input) => {_brewer = input}}/>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input}}/>
        <input
          type='text'
          id='abv'
          placeholder='Alcohol Percentage'
          ref={(input) => {_abv = input}}/>
        <textarea
          id='description'
          placeholder='Describe your Drink'
          ref={(textarea) => {_description = textarea}}/>
        <button type='submit'>Submit Drink!</button>
      </form>
    </div>
  )
}

NewDrinkForm.propTypes = {
  onNewDrinkCreation: PropTypes.func
}


export default NewDrinkForm
