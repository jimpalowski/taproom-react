import React from 'react'
import NewDrinkForm from './NewDrinkForm'
import PropTypes from 'prop-types'
import ConfirmationQuestions from './ConfirmationQuestions'

class NewDrinkControl extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false
    }
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this)
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true})
  }

  render(){
    let currentlyVisibleContent = null
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewDrinkForm onNewDrinkCreation={this.props.onNewDrinkCreation}/>
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    )
  }
}

NewDrinkControl.propTypes = {
  onNewDrinkCreation: PropTypes.func
}


export default NewDrinkControl
