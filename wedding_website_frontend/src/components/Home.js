import React, { Component } from 'react'
import Slider from './Slider'

class Home extends Component {
  render() {
    return (
        <body className="home">
          <div className="main-content">
            <h1 className="cursive">Callie Anne Tierney & Edward Martin Humphreys</h1>
            <h3>ARE GETTING MARRIED</h3>
            <h1 className="cursive">September 7th, 2019</h1>
            <h3>We can't wait to celebrate our love with you</h3>
            <Slider />
          </div>
        </body>
    )
  }
}

export default Home
