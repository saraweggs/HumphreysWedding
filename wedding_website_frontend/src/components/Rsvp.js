import React, { Component } from 'react'
import Guestlist from './Guestlist'
import Guest from './Guest'

// const baseAPI = 'https://radiant-eyrie-37659.herokuapp.com/'
const baseAPI = 'http://localhost:3000/'

class Rsvp extends Component {
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
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fetchGuests = this.fetchGuests.bind(this)
    this.handleCreateGuest = this.handleCreateGuest.bind(this)
    this.updateArray = this.updateArray.bind(this)
    this.handleRsvp = this.handleRsvp.bind(this)
    this.handleDeleteGuest = this.handleDeleteGuest.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.handleRsvp()
    this.fetchGuests()
    this.setState({
      first_name: '',
      last_name: '',
      current_user: ''
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleRsvp() {
    this.setState({
      showRsvp: !this.state.showRsvp
    })
  }

  fetchGuests() {
    fetch(baseAPI + `guests`)
      .then( data => data.json())
      .then( jData => {
        console.log('this is from fetchGuests', jData);
        this.setState({
          guests: jData
        })
        console.log('this is guests array', this.state.guests);
      })
  }

  handleCreateGuest(guest) {
    console.log(guest);
    fetch(baseAPI + `guests`, {
      body: JSON.stringify(guest),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then( createdGuest => createdGuest.json())
      .then( jData => {
        console.log('this is from handleCreateGuest', jData);
        this.updateArray(jData, 'guests')
      })
      .catch( err => console.log('this is err', err))
  }

  handleDeleteGuest(guestId, arrayIndex, array) {
    console.log(guestId);
    console.log(arrayIndex);
    console.log(array);
    fetch(baseAPI + `guests/` + `${guestId}`, {
      method: 'DELETE'
    })
      .then(data => {
        this.removeFromArray(array, arrayIndex)
      })
      .catch(err => console.log(err))
  }

  updateArray(guest, array) {
    this.setState(prevState => ({
      [array]:[...prevState[array], guest]
    }))
  }

  removeFromArray(array, arrayIndex) {
    this.setState(prevState => {
      prevState['guests'].splice(arrayIndex, 1)
      return {
        ['guests']: prevState['guests']
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="rsvp">
          <div className="main-content">
          <h1 className="cursive heading">RSVP</h1>
          <h3>To RSVP for our wedding, log in using your first name, last name, & password: Guest</h3><br />
            <form onSubmit={this.handleSubmit}>
              First Name:<input
                  type="text"
                  id="first_name"
                  value={this.state.first_name}
                  onChange={this.handleChange} /><br />
              Last Name:<input
                  type="text"
                  id="last_name"
                  value={this.state.last_name}
                  onChange={this.handleChange} /><br />
              Password:<input
                  type="password"
                  id="currentUser"
                  value={this.state.currentUser}
                  onChange={this.handleChange} /><br />
              <input
                  type="submit"
                  value="I Do." />
            </form>
            { (this.state.showRsvp) ?
               (this.state.currentUser === 'charlie') ?
              <div>
                <h1>Welcome to your Guestlist Management!</h1>
                <Guestlist
                    guests={this.state.guests}
                    first_name={this.state.first_name}
                    last_name={this.state.last_name}
                    address={this.state.address}
                    attending={this.state.attending}
                    fetchGuests={this.fetchGuests}
                    handleCreateGuest={this.handleCreateGuest}
                    handleChange={this.handleChange}
                    handleDeleteGuest={this.handleDeleteGuest}
                />
              </div>
              :
              <form>
                <h1>Hi, {this.state.first_name}!</h1>
                <h2>Will you be able to attend?</h2>
                Accepts:
                <input
                    type="radio"
                    value='true'/><br />
                Regretfully Declines:
                <input
                    type="radio"
                    value='false'/><br />
                <input
                    type="submit"
                    value="RSVP" />
              </form>

            : ''
          }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Rsvp
