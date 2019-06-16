import React, { Component } from 'react'

class Accomodations extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="accomodations">
          <header className="accomodations-header">
            <img src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/62221226_10103857552555973_116386685939351552_n.jpg?_nc_cat=108&_nc_oc=AQlBOcajt37qZztuadHAb-pTLslDAs86Q9WVuCg5EgOPrrf0pDqaNxRjohgaYHg1bOg&_nc_ht=scontent-ort2-2.xx&oh=5dfe163f8635e7bdfd0a35b1cdb6cac9&oe=5D7D62F1" />
          </header>
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
