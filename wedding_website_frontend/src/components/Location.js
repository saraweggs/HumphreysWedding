import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import MapContainer from './Map'

class Location extends Component {
  render() {
    return (
        <div className="location">
          <div>
            <h1 className="cursive heading">Ceremony & Reception</h1>
            <img className="eucalyptus" src={process.env.PUBLIC_URL + '/images/eucalyptus.png'} />
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
