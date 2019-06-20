import React, { Component } from 'react'
import Guestlist from './Guestlist'
import Guest from './Guest'
import GuestRsvp from './GuestRSVP'

// const baseAPI = 'https://radiant-eyrie-37659.herokuapp.com/'
const baseAPI = 'http://localhost:3000/'

class Rsvp extends Component {
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
      guest: [],
      showRsvp: false
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
  }

  handleSubmit(event) {
    event.preventDefault()
    this.handleRsvp()
    this.fetchGuests()
    console.log('this is from handleSubmit', this.state);

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
          console.log('this is guest data', guestData);
            this.setState({
              guest: guestData
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

  handleRadioButton(value) {
    this.setState({
      attending: value,
    })
    console.log(this.state);
  }

  handleSubmitRsvp(e) {
    e.preventDefault()
    this.handleRadioButton()
    this.handleEditGuest()
    console.log(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <div className="rsvp">
          <div className="main-content">
          <h1 className="cursive heading">RSVP</h1>
          <img className="eucalyptus" src="https://png2.kisspng.com/sh/283511c8f211fc299e7eacdaec04f5f7/L0KzQYm3U8I5N6dtfZH0aYP2gLBuTgdmbJVuhtk2aX75ecXolPlwdl5nitttZYPwcbrrTfV2a5JxkeJ9dYOwd8b1jvlqNZ5mRddAY3HvicH7lgMuPZJneqduM3XmdLXpWcYvQGM9TasAM0W0RYO5UsI5P2o9UKY8Mj7zfri=/kisspng-wedding-invitation-bridesmaid-eucalyptus-gunnii-ma-eucalyptus-5abb5e3ecddb96.8285953515222287988432.png" />
          <h3>To RSVP for our wedding, log in using your first name, last name, & RSVP Code found on your invitation.</h3><br />

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
              RSVP Code:<input
                  type="password"
                  id="id"
                  value={this.state.id}
                  onChange={this.handleChange} /><br />
              <input
                  type="submit"
                  value="I Do." />
            </form>


            { (this.state.showRsvp) ?
               (this.state.id === 'charlie') ?


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
