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
      first_name: '',
      last_name: '',
      currentUser: '',
      attending: false
    }
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <nav>
              <span>
                <Link to="/" className="nav">Home</Link>
              </span>
              <span>
                <Link to="/location/" className="nav">Location</Link>
              </span>
              <span>
                <Link to="/accomodations/" className="nav">Accomodations</Link>
              </span>
              <span>
                <Link to="/events/" className="nav">Events</Link>
              </span>
              <span>
                <Link to="/wedding-party/" className="nav">Wedding Party</Link>
              </span>
              <span>
                <Link to="/registry/" className="nav">Registry</Link>
              </span>
              <span>
                <Link to="/rsvp/" className="nav">RSVP</Link>
              </span>
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
