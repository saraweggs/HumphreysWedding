import React, { Component } from 'react'

class Accomodations extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="accomodations">
          <div className="accomodations-main">
            <h1>Rest</h1>
            <span>For your convenience, a preferred rate is available the weekend of our wedding,</span>
            <span>September 6th - September 8th, 2019.</span>
            <div className="hotel-info">
              <div className="hotel-name">Charleston Marriott Town Center</div>
              <span>200 Lee St E, Charleston, WV 25301, USA</span>< br/>
              <span>304-345-6500</span>< br/>
              <span>Rate: $109.00</span>< br/>
              <span>Must book by August 16th, 2019 for Room Rate</span>< br/>
              <button>Book a Room</button>
            </div>
            </div>
          </div>
        </React.Fragment>
    )
  }
}

export default Accomodations
