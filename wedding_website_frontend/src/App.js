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

const baseAPI = 'https://radiant-eyrie-37659.herokuapp.com/'

class App extends Component {
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
      isAttending: '',
      guests: [],
      showRsvp: false
    }
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <nav className="navigation-menu">
              <label
                className="hamburger-icon"
                aria-label="Open navigation menu"
                for="menu-toggle"
                >&#9776;</label>
              <input type="checkbox" id="menu-toggle" />
              <ul className="main-navigation">
                <li><a>
                  <Link to="/" className="nav">Home</Link>
                </a></li>
              <li><a>
                <Link to="/location/" className="nav">Location</Link>
              </a></li>
              <li><a>
                <Link to="/accomodations/" className="nav">Accomodations</Link>
              </a></li>
              <li><a>
                <Link to="/events/" className="nav">Events</Link>
              </a></li>
              <li><a>
                <Link to="/wedding-party/" className="nav">Wedding Party</Link>
              </a></li>
              <li><a>
                <Link to="/registry/" className="nav">Registry</Link>
              </a></li>
              <li><a>
                <Link to="/rsvp/" className="nav">RSVP</Link>
              </a></li>
              </ul>
            </nav>

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
