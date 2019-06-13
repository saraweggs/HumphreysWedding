import React, { Component } from 'react'

import Accomodations from './components/Accomodations'
import Events from './components/Events'
import Guestlist from './components/Guestlist'
import Location from './components/Location'
import Registry from './components/Registry'
import Rsvp from './components/Rsvp'
import WeddingParty from './components/Wedding_Party'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: ''
    }
  }
  render() {
    return (
      <div>
        Callie's Wedding Website! Yaay!
      </div>
    )
  }
}

export default App
