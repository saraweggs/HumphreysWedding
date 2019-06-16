import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import MapContainer from './Map'

class Location extends Component {
  render() {
    return (
        <div className="location">
          <header className="location-header">
            <img src="http://www.enchantedweddingcompany.com/wp-content/uploads/2017/08/wec8-1024x681.jpg" />
          </header>
          <div className="location-main">
            <h1>Saint Agnes Catholic Church</h1>
            <p>_____________________________________</p>
            <span>4807 Staunton Avenue SE</span>
            <span>Charleston, WV 25304</span>
            <div id="map">
              <MapContainer />
            </div>
          </div>
        </div>
    )
  }
}

export default Location
