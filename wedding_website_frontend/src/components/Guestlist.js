import React, { Component } from 'react'
import Rsvp from './Rsvp'
import Guest from './Guest'

const baseAPI = 'http://localhost:3000/'

class Guestlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: '',
      id: '',
      first_name: '',
      last_name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      attending: '',
      guests: [],
      showRsvp: false
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleEditGuest = this.handleEditGuest.bind(this)
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

    handleSelect(guestId, arrayIndex) {
      console.log(guestId);
      this.setState({
          id: this.props.guests[arrayIndex].id,
          first_name: this.props.guests[arrayIndex].first_name,
          last_name: this.props.guests[arrayIndex].last_name,
          address: this.props.guests[arrayIndex].address,
          city: this.props.guests[arrayIndex].city,
          state: this.props.guests[arrayIndex].state,
          zip: this.props.guests[arrayIndex].zip,
          attending: this.props.guests[arrayIndex].attending
      })
    }

    handleEditGuest(guestId, arrayIndex, array) {
      console.log(this.state);
      fetch(baseAPI + `guests/` + `${this.state.id}`, {
        body: JSON.stringify({
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip,
          attending: this.state.attending
        }),
        method: 'PUT',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then( updatedGuest => updatedGuest.json())
      .then( updatedJData => {
        this.props.fetchGuests()
        this.props.updateArray(updatedJData, 'guests')
        this.clearForm()
      })
      .catch( err => console.log('this is err', err))
    }

  render() {
    return (
        <div className="guestlist">
          <h2>Add or Edit a Guest:</h2>
          <div className="guestlist">
          <form onSubmit={this.handleSubmit} className="guest-form">

            <div className="field-row">
            <label className="form-label" for="firstName">First Name:</label>
            <input
                className="guestlist-form"
                type="text"
                value={this.state.first_name}
                id="first_name"
                onChange={this.handleChange}/><br />
            </div>
            <div className="field-row">
            <label className="form-label" for="lastName">Last Name:</label>
            <input
                className="guestlist-form"
                type="text"
                value={this.state.last_name}
                id="last_name"
                onChange={this.handleChange}/><br />
            </div>
            <div className="field-row">
            <label class="form-label" for="address">Address:</label>
            <input
                className="guestlist-form"
                type="text"
                value={this.state.address}
                id="address"
                onChange={this.handleChange}/><br />
            </div>
            <div className="field-row">
            <label class="form-label" for="city">City:</label>
            <input
                className="guestlist-form"
                type="text"
                value={this.state.city}
                id="city"
                onChange={this.handleChange}/><br />
            </div>
            <div className="field-row">
            <label className="form-label" for="state">State:</label>
            <input
                className="guestlist-form"
                type="text"
                value={this.state.state}
                id="state"
                onChange={this.handleChange}/>
            </div>
            <div className="field-row">
            <label className="form-label" for="zip">Zip Code:</label>
            <input
                className="guestlist-form"
                type="text"
                value={this.state.zip}
                id="zip"
                onChange={this.handleChange}/>
            </div>
            <input type="submit" value="Add Guest" className="input-button"/>
          </form>
          <button onClick={() => { this.handleEditGuest(this.props.id, this.props.index, this.props.currentArray)}}>Edit Guest</button>
          </div>

          <h2>Wedding Guestlist:</h2>
          <div className="table-container">
              <table className="responsive-table">
                <tbody>
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
                id={guest.id}
                updateArray={this.props.updateArray}
                handleDeleteGuest={this.props.handleDeleteGuest}
                handleEditGuest={this.handleEditGuest}
                handleSelect={this.handleSelect}
              />
            )
          })}
            </tbody>
            </table>
          </div>
        </div>
    )
  }
}

export default Guestlist
