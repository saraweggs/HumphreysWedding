import React, { Component } from 'react'

class Accomodations extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="accomodations">
          <div className="main-content">
            <h1 className="cursive heading">Rest</h1>
            <img className="eucalyptus" src="https://png2.kisspng.com/sh/283511c8f211fc299e7eacdaec04f5f7/L0KzQYm3U8I5N6dtfZH0aYP2gLBuTgdmbJVuhtk2aX75ecXolPlwdl5nitttZYPwcbrrTfV2a5JxkeJ9dYOwd8b1jvlqNZ5mRddAY3HvicH7lgMuPZJneqduM3XmdLXpWcYvQGM9TasAM0W0RYO5UsI5P2o9UKY8Mj7zfri=/kisspng-wedding-invitation-bridesmaid-eucalyptus-gunnii-ma-eucalyptus-5abb5e3ecddb96.8285953515222287988432.png" />< br/>
            <div className="">For your convenience, a preferred rate is available the weekend of our wedding,</div>
            <div>September 6th - September 8th, 2019.</div>
            <div className="hotel-info">
              <h2 className="hotel-name cursive">Charleston Marriott Town Center</h2>
              <span className="address">200 Lee St E, Charleston, WV 25301, USA</span>< br/>
              <span className="address">304-345-6500</span>< br/>
              <span className="address">Rate: $109.00</span>< br/>
              <span>Must book by August 16th, 2019 for Room Rate</span>< br/>
              <button className="book">Book a Room</button>
            </div>
            </div>
          </div>
        </React.Fragment>
    )
  }
}

export default Accomodations
