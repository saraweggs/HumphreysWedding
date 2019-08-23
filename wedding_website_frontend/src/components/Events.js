import React, { Component } from 'react'

class Events extends Component {
  render() {
    return (
        <div className="events">
          <div className="main-content">
            <h1 className="cursive heading">Eat, Drink, and be Married</h1>
            <img className="eucalyptus" src={process.env.PUBLIC_URL + '/images/eucalyptus.png'} />
            <h3>Rehersal Dinner</h3>
            <span>Edgewood Country Club | 6:30pm - 10pm</span>
            <h3>Wedding Ceremony</h3>
            <span>Saint Agnes Catholic Church | 2:00pm - 4:00pm</span>
            <h3>Reception</h3>
            <span>Charleston Civic Center</span><br />
            <span>Cocktail Hour | 4:30pm - 6:00pm</span><br />
            <span>Dinner | 6:30pm - 7:30pm</span><br />
          </div>
        </div>
    )
  }
}

export default Events
