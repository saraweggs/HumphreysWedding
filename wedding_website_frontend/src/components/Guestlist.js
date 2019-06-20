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
      attending: false,
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
          id: guestId,
          first_name: this.props.guests[arrayIndex].first_name,
          last_name: this.props.guests[arrayIndex].last_name,
          address: this.props.guests[arrayIndex].address,
          city: this.props.guests[arrayIndex].city,
          state: this.props.guests[arrayIndex].state,
          zip: this.props.guests[arrayIndex].zip
      })
    }

    handleEditGuest(guestId, arrayIndex, array) {
      console.log(guestId);
      fetch(baseAPI + `guests/` + `${guestId}`, {
        body: JSON.stringify({
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip
        }),
        method: 'PUT',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then( updatedGuest => updatedGuest.json())
      .then( updatedJData => {
        this.props.updateArray(updatedJData, 'guests')
      })
      .catch( err => console.log('this is err', err))
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
            <button onClick={() => { this.handleEditGuest(this.props.guests.id, this.props.index, this.props.currentArray)}}>Edit Guest</button>
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
