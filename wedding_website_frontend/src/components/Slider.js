import React, { Component } from 'react'
import Slide from './Slide'
import LeftArrow from './Leftarrow'
import RightArrow from './Rightarrow'

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/62411938_10103857550794503_8213742856129478656_n.jpg?_nc_cat=111&_nc_oc=AQnWbibrTNrlTDw-0QjNyuMXT5jmVQtAbHNbjGlmzp1y2l0xecdEkshfaWbnFPi2BKw&_nc_ht=scontent-ort2-2.xx&oh=c5a422dc44f6951e35b72cbbf6d3299a&oe=5D8100FF",
        "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/62078112_10103857552316453_3018062072811356160_n.jpg?_nc_cat=100&_nc_oc=AQmim-_gf2och4KhlmVG2ApA_NvlwFwIA0EYe2vM0iBmkYhSaonKFGQScQaxdVfcDNs&_nc_ht=scontent-ort2-2.xx&oh=891c55fc19dd28f6f324ef684dc5f91d&oe=5D895181",
        "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/62481882_10103857551752583_2158765449049800704_n.jpg?_nc_cat=108&_nc_oc=AQkGWAntmsikkgjKhh1Y8G8X76mLEUyN2E9HwfcOqsCZd9uQOyti-q8dy8wf5iqm3pk&_nc_ht=scontent-ort2-2.xx&oh=e722e3dcca9a5b9a28a0b79e974761b3&oe=5D84A4A2",
        "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/64219451_10103857552181723_8897166659383459840_n.jpg?_nc_cat=103&_nc_oc=AQmlnh62g052WgPxWsdacLHBJnnZrWP80RdymE5vOYwkWTabQTN6-mIAD3C2I7w3cLM&_nc_ht=scontent-ort2-2.xx&oh=243871ee6a1643d0096703b3b7067985&oe=5D93F9B2",
        "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/62654400_10103857551952183_4945434363492827136_n.jpg?_nc_cat=103&_nc_oc=AQnkO0SXo54umj_s6elTB0_yfz_wWrcDYLJwtjQvryu0BO7ziUte5XOfN6zBhYR8Igs&_nc_ht=scontent-ort2-2.xx&oh=c351610704f467559ef70b95fdd0e3e2&oe=5D7AA46D",
        "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/64223744_10103857551383323_7053334841273614336_n.jpg?_nc_cat=105&_nc_oc=AQkOChFzhOEWd62-mKbY5bwN-fPSeqwY6D-DokDICDyDg0VVjQ_bJRlkNPk9btKl-eI&_nc_ht=scontent-ort2-2.xx&oh=3589c8d9ead19640413fb598f198309d&oe=5DC6A1D2"
      ],
      currentIndex: 0,
      translateValue: 0
    }
    this.goToPrevSlide = this.goToPrevSlide.bind(this)
    this.goToNextSlide = this.goToNextSlide.bind(this)
    this.slideWidth = this.slideWidth.bind(this)
  }

  goToPrevSlide() {
    if (this.state.currentIndex === 0)
      return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide() {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }))
  }

  slideWidth() {
    return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className="slider">

        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
        {
          this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))
        }
        </div>

        <LeftArrow
            goToPrevSlide={this.goToPrevSlide}
        />
        <RightArrow
            goToNextSlide={this.goToNextSlide}
        />
      </div>
    )
  }
}

export default Slider
