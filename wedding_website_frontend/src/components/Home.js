import React, { Component } from 'react'
import Slider from './Slider'

class Home extends Component {
  render() {
    return (
        <div className="home">
          <div className="main-content">
            <h1 className="cursive heading">Callie Anne Tierney & Edward Martin Humphreys</h1>
            <h3>ARE GETTING MARRIED</h3>
            <h1 className="cursive">September 7th, 2019</h1>
            <img className="eucalyptus" src="https://png2.kisspng.com/sh/283511c8f211fc299e7eacdaec04f5f7/L0KzQYm3U8I5N6dtfZH0aYP2gLBuTgdmbJVuhtk2aX75ecXolPlwdl5nitttZYPwcbrrTfV2a5JxkeJ9dYOwd8b1jvlqNZ5mRddAY3HvicH7lgMuPZJneqduM3XmdLXpWcYvQGM9TasAM0W0RYO5UsI5P2o9UKY8Mj7zfri=/kisspng-wedding-invitation-bridesmaid-eucalyptus-gunnii-ma-eucalyptus-5abb5e3ecddb96.8285953515222287988432.png" />
            <h3>We can't wait to celebrate our love with you</h3>
            <Slider />
          </div>
        </div>
    )
  }
}

export default Home
