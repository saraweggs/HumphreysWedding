import React, { Component } from 'react'

class Accomodations extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="accomodations">
          <div className="main-content">
            <h1 className="cursive heading">Where to Stay</h1>
            <img className="eucalyptus" src={process.env.PUBLIC_URL + '/images/eucalyptus.png'} />< br/>
            <div className="">For your convenience, a preferred rate is available the weekend of our wedding,</div>
            <div>September 6th - September 8th, 2019.</div>
            <div className="hotel-info">
              <h2 className="hotel-name cursive">Charleston Marriott Town Center</h2>
              <span className="address">200 Lee St E, Charleston, WV 25301, USA</span>< br/>
              <span className="address">304-345-6500</span>< br/>
              <span className="address">Rate: $109.00</span>< br/>
              <span>Must book by August 16th, 2019 for Room Rate</span>< br/>
              <a className="button" href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1555592997500&key=GRP&app=resvlink" target="_blank">Book a Room</a>
            </div>
            </div>
          </div>
        </React.Fragment>
    )
  }
}

export default Accomodations
