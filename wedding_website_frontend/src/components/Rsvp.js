import React, { Component } from 'react'
import Guestlist from './Guestlist'
import Guest from './Guest'
import GuestRsvp from './GuestRSVP'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const baseAPI = 'https://radiant-eyrie-37659.herokuapp.com/'
// const baseAPI = 'http://localhost:3000/'

class Rsvp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current_user: '',
      id: '',
      first_name: '',
      last_name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      attending: '',
      guests: [],
      showRsvp: false,
      bride_name: '',
      bride_lname: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fetchGuests = this.fetchGuests.bind(this)
    this.handleCreateGuest = this.handleCreateGuest.bind(this)
    this.updateArray = this.updateArray.bind(this)
    this.handleRsvp = this.handleRsvp.bind(this)
    this.handleDeleteGuest = this.handleDeleteGuest.bind(this)
    this.handleRadioButton = this.handleRadioButton.bind(this)
    this.handleSubmitRsvp = this.handleSubmitRsvp.bind(this)
    this.fetchGuest = this.fetchGuest.bind(this)
    this.handleGuestRSVP = this.handleGuestRSVP.bind(this)
    this.handleSubmitBride = this.handleSubmitBride.bind(this)
    this.handleChangeBride = this.handleChangeBride.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.handleRsvp()
    this.fetchGuest(this.state.id)
  }

  handleSubmitBride(event) {
    console.log(this.state);
    event.preventDefault()
    this.handleRsvp()
    this.fetchGuests()
    this.setState({
      current_user: this.state.current_user
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleChangeBride(event) {
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
            jData.sort(function(a, b) {
              let nameA = a.last_name.toLowerCase();
              let nameB = b.last_name.toLowerCase();
              if ( nameA < nameB ) {
                return -1;
              } else if (nameA > nameB) {
                return 1;
              } else {
                return 0;
              }
            })
              this.setState({
                  guests: jData
              })
            })
          }

  fetchGuest(guestId) {
    fetch(baseAPI + `guests/` + `${guestId}`)
        .then( data => data.json())
        .then( guestData => {
            this.setState({
              id: guestData.id,
              first_name: guestData.first_name,
              last_name: guestData.last_name,
              address: guestData.address,
              city: guestData.city,
              state: guestData.state,
              zip: guestData.zip,
              attending: guestData.attending
            })
        })
  }

  handleCreateGuest(guest) {
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
        this.updateArray(jData, 'guests')
        this.fetchGuests()
      })
      .catch( err => console.log('this is err', err))
  }

  handleDeleteGuest(guestId, arrayIndex, array) {
    fetch(baseAPI + `guests/`+ `${guestId}`, {
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

  handleGuestRSVP(guestId) {
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
      this.updateArray(updatedJData, 'guests')
    })
    .catch( err => console.log('this is err', err))
  }

  handleRadioButton(value) {
    this.setState({
      attending: value,
    })
  }

  handleSubmitRsvp(e) {
    e.preventDefault()
    this.handleRadioButton()
    this.handleGuestRSVP(this.state.id)
    this.props.history.push('/')
    alert("Thank you for your RSVP!")
  }

  render() {
    return (
      <React.Fragment>
        <div className="rsvp">
          <div className="main-content">
          <h1 className="cursive heading">RSVP</h1>
          <img className="eucalyptus" src="https://png2.kisspng.com/sh/283511c8f211fc299e7eacdaec04f5f7/L0KzQYm3U8I5N6dtfZH0aYP2gLBuTgdmbJVuhtk2aX75ecXolPlwdl5nitttZYPwcbrrTfV2a5JxkeJ9dYOwd8b1jvlqNZ5mRddAY3HvicH7lgMuPZJneqduM3XmdLXpWcYvQGM9TasAM0W0RYO5UsI5P2o9UKY8Mj7zfri=/kisspng-wedding-invitation-bridesmaid-eucalyptus-gunnii-ma-eucalyptus-5abb5e3ecddb96.8285953515222287988432.png" />

          { (this.state.showRsvp === false) ?
            <div>
          <h3>To RSVP for our wedding, log in using your first name, last name, & RSVP Code found on your invitation.</h3>

          <div className="forms">
            <form onSubmit={this.handleSubmit}>
              Guest RSVP:< br/>
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
              RSVP Code:<input
                  type="password"
                  id="id"
                  value={this.state.id}
                  onChange={this.handleChange} /><br />
              <input
                  type="submit"
                  value="Log In" />
            </form>

            <form onSubmit={this.handleSubmitBride}>
              Bride & Groom Login:< br/>
              First Name:<input
                  type="text"
                  id="bride_name"
                  value={this.state.bride_name}
                  onChange={this.handleChangeBride} /><br />
              Last Name:<input
                  type="text"
                  id="bride_lname"
                  value={this.state.bride_lname}
                  onChange={this.handleChangeBride} /><br />
              Password:<input
                  type="password"
                  id="current_user"
                  value={this.state.current_user}
                  onChange={this.handleChangeBride} /><br />
              <input
                  type="submit"
                  value="Log In" />
            </form>

          </div>
          </div>
              : '' }

               { (this.state.showRsvp) ?
               (this.state.current_user === 'charlie')

               ?

              <div>
                <h1>Welcome to your Guestlist Management!</h1>
                <Guestlist
                    guests={this.state.guests}
                    id={this.state.id}
                    first_name={this.state.first_name}
                    last_name={this.state.last_name}
                    address={this.state.address}
                    attending={this.state.attending}
                    fetchGuests={this.fetchGuests}
                    handleCreateGuest={this.handleCreateGuest}
                    handleChange={this.handleChange}
                    handleDeleteGuest={this.handleDeleteGuest}
                    updateArray={this.updateArray}
                    handleSubmitBride={this.handleSubmitBride}
                    handleChangeBride={this.handleChangeBride}
                />
              </div>

              :

              <GuestRsvp
                  guests={this.state.guests}
                  first_name={this.state.first_name}
                  last_name={this.state.last_name}
                  address={this.state.address}
                  attending={this.state.attending}
                  handleRadioButton={this.handleRadioButton}
                  handleSubmitRsvp={this.handleSubmitRsvp}
                  handleEditGuest={this.handleEditGuest}
                  guest={this.state.guest}
                  fetchGuests={this.fetchGuests}
                  handleGuestRSVP={this.handleGuestRSVP}
              />

            : ''
          }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Rsvp
