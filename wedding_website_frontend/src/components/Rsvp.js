import React, { Component } from 'react'

class Rsvp extends Component {
  render() {
    return (
        <div className="rsvp">
          <div className="main-content">
          <h1 className="cursive">RSVP</h1>
            <form>
              First Name:<input type="text"></input><br />
              Last Name:<input type="text"></input><br />
              <input type="submit" value="I Do."></input>
            </form>
          </div>
        </div>
    )
  }
}

export default Rsvp
