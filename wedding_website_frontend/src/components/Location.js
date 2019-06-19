import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import MapContainer from './Map'

class Location extends Component {
  render() {
    return (
        <div className="location">
          <div>
            <h1 className="cursive heading">Ceremony & Reception</h1>
            <img className="eucalyptus" src="https://png2.kisspng.com/sh/283511c8f211fc299e7eacdaec04f5f7/L0KzQYm3U8I5N6dtfZH0aYP2gLBuTgdmbJVuhtk2aX75ecXolPlwdl5nitttZYPwcbrrTfV2a5JxkeJ9dYOwd8b1jvlqNZ5mRddAY3HvicH7lgMuPZJneqduM3XmdLXpWcYvQGM9TasAM0W0RYO5UsI5P2o9UKY8Mj7zfri=/kisspng-wedding-invitation-bridesmaid-eucalyptus-gunnii-ma-eucalyptus-5abb5e3ecddb96.8285953515222287988432.png" />
            <h2 className="cursive">Ceremony</h2>
            <div className="address">Saint Agnes Catholic Church</div>
            <div className="address">4807 Staunton Avenue SE</div>
            <div className="address">Charleston, WV 25304</div>
            <h2 className="cursive">Reception</h2>
            <div className="address">Charleston Civic Center</div>
            <div className="address">200 Civic Center Drive</div>
            <div className="address">Charleston, WV 25301</div>
              <MapContainer />
          </div>
        </div>
    )
  }
}

export default Location
