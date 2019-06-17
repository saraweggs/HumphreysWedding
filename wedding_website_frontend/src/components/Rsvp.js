import React, { Component } from 'react'

class Rsvp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: '',
      last_name: '',
      currentUser: '',
      attending: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      currentUser: this.state.currentUser
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="rsvp">
          <div className="main-content">
          <h1 className="cursive">RSVP</h1>
          <span>To RSVP for our wedding, log in using your first name, last name, & password: Guest</span><br />
            <form onSubmit={this.handleSubmit}>
              First Name:<input type="text" value={this.state.first_name} onChange={this.handleChange} id="first_name"></input><br />
              Last Name:<input type="text" value={this.state.last_name} onChange={this.handleChange} id="last_name"></input><br />
              Password:<input type="text" value={this.state.currentUser} onChange={this.handleChange} id="currentUser"></input><br />
              <input type="submit" value="I Do."></input>
            </form>
            { (this.state.currentUser) ?
               (this.state.currentUser === 'bentleyandcharlie') ?
              <div>
                <h1>Welcome to your Guestlist Management!</h1>
              </div>
              :
              <form>
                <h2>Will you be able to attend?</h2>
                Accepts:
                <input type="radio" value='true' onChange={this.handleAttendChange} /><br />
                Regretfully Declines:
                <input type="radio" value='false' onChange={this.handleAttendChange} /><br />
                <input type="submit" value="RSVP"></input>
              </form>

            : ''
          }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Rsvp
