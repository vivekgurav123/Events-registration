// Write your code here
import {Component} from 'react'
import './index.css'

class ActiveEventRegistration extends Component {
  //   state = {registrationStatus: ''}

  renderRegisteredView = () => (
    <div className="registered">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  renderYetToRegisterView = () => (
    <div className="yet-to-register">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
        alt="yet to register"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing live dance live can often make you fall totally in love with this
        beautiful art form
      </p>
      <button type="button">Register Here</button>
    </div>
  )

  renderRegistrationCloseView = () => (
    <div className="closed">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  renderNoRegistrationView = () => (
    <p className="msg">Click on an event, to view its registration details </p>
  )

  render() {
    const {status} = this.props
    console.log(status)
    switch (status) {
      case 'YET_TO_REGISTER':
        return this.renderYetToRegisterView()
      case 'REGISTERED':
        return this.renderRegisteredView()
      case 'REGISTRATIONS_CLOSED':
        return this.renderRegistrationCloseView()
      default:
        return this.renderNoRegistrationView()
    }
  }
}

export default ActiveEventRegistration
