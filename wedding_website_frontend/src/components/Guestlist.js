import React, { Component } from 'react'
import Rsvp from './Rsvp'
import Guest from './Guest'

class Guestlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: '',
      first_name: '',
      last_name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      attending: false,
      guests: [],
      showRsvp: false
    }
  }

  handleSubmit = (e) => {
   e.preventDefault()
   this.props.handleCreateGuest(this.state)
   this.props.fetchGuests()
   this.clearForm()
}

  handleChange = (e) => {
   this.setState({
     [e.target.id]: e.target.value
   })
}

  clearForm = () => {
  this.setState({ first_name: '',
                  last_name: '',
                  address: '',
                  city: '',
                  state: '',
                  zip: ''})
}

  render() {
    return (
        <div className="guestlist">
          <h2>Add A Guest:</h2>
          <form onSubmit={this.handleSubmit}>
            First Name:<input
                type="text"
                value={this.state.first_name}
                id="first_name"
                onChange={this.handleChange}/>
            Last Name:<input
                type="text"
                value={this.state.last_name}
                id="last_name"
                onChange={this.handleChange}/>
            Address: <input
                type="text"
                value={this.state.address}
                id="address"
                onChange={this.handleChange}/>
            City: <input
                type="text"
                value={this.state.city}
                id="city"
                onChange={this.handleChange}/>
            State: <input
                type="text"
                value={this.state.state}
                id="state"
                onChange={this.handleChange}/>
            Zip Code: <input
                type="text"
                value={this.state.zip}
                id="zip"
                onChange={this.handleChange}/>
            <input type="submit" value="Add Guest" />
          </form>
          <h2>Wedding Guestlist:</h2>
          <div className="table-container">
              <table className="responsive-table">
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip Code</th>
                  <th>Attending</th>
                  <th>Edit Guest</th>
                  <th>Remove Guest</th>
                </tr>
          {this.props.guests.map( (guest, index) => {
            return (
              <Guest
                key={index}
                index={index}
                guest={guest}
                handleDeleteGuest={this.props.handleDeleteGuest}
              />
            )
          })}
            </table>
          </div>
        </div>
    )
  }
}

export default Guestlist
