import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './components/Home'
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
    this.fetchGuests = this.fetchGuests.bind(this)
  }

  fetchGuests() {
      fetch('http://localhost:3000/guests')
        .then(data => data.json())
      .then(guestData => {
        console.log(guestData);
      })
  }

  componentDidMount() {
      this.fetchGuests()
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <nav>
              <span>
                <Link to="/location/">Location</Link>
              </span>
              <span>
                <Link to="/accomodations/">Accomodations</Link>
              </span>
              <span>
                <Link to="/events/">Events</Link>
              </span>
              <span>
                <Link to="/wedding-party/">Wedding Party</Link>
              </span>
              <span>
                <Link to="/registry/">Registry</Link>
              </span>
              <span>
                <Link to="/rsvp/">RSVP</Link>
              </span>
            </nav>
            <header>
            <Link to="/">Callie & Edward</Link>
            </header>
            <Route path="/" exact component={Home} />
            <Route path="/location/" component={Location} />
            <Route path="/accomodations/" component={Accomodations} />
            <Route path="/events/" component={Events} />
            <Route path="/wedding-party/" component={WeddingParty} />
            <Route path="/registry/" component={Registry} />
            <Route path="/rsvp/" component={Rsvp} />
          </div>
        </Router>
      </React.Fragment>
    )
  }
}

export default App
