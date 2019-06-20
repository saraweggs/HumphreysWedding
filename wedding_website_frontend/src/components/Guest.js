import React, { Component } from 'react'
import Guestlist from './Guestlist'
import Rsvp from './Rsvp'

class Guest extends Component {
  render() {
    return (
          <tr>
            <td>{this.props.guest.first_name}</td>
            <td>{this.props.guest.last_name}</td>
            <td>{this.props.guest.address}</td>
            <td>{this.props.guest.city}</td>
            <td>{this.props.guest.state}</td>
            <td>{this.props.guest.zip}</td>
            <td>{(this.props.guest.attending === false) ? 'Confirmed' : 'Not Confirmed'}</td>
            <td className="edit-icon" onClick={() => {this.props.handleSelect(this.props.guest.id, this.props.index, this.props.currentArray)}}><i className="far fa-edit"></i></td>
            <td className="edit-icon" onClick={() => { this.props.handleDeleteGuest(this.props.guest.id, this.props.index, this.props.currentArray)}}><i className="far fa-trash-alt"></i></td>
          </tr>
    )
  }
}

export default Guest
