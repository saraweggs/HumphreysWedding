import React, { Component } from 'react'
import Guestlist from './Guestlist'
import Rsvp from './Rsvp'
import Guest from './Guest'

class GuestRsvp extends Component {
  render() {
    return (

      <form onSubmit={this.props.handleSubmitRsvp}>
        <h1>Hi, {this.props.first_name}!</h1>
        <h2>Will you be able to attend?</h2>
        Accepts:
        <input
            type="radio"
            checked={this.props.attending === true}
            onChange={() => this.props.handleRadioButton(true)}
            /><br />
        Regretfully Declines:
        <input
            type="radio"
            checked={this.props.attending === false}
            onChange={() => this.props.handleRadioButton(false)}
            /><br />
        <input
            type="submit"
            value="RSVP" />
      </form>
    )
  }
}

export default GuestRsvp
