import '../../components/events.css'
import { apiRequest, Auth } from '../../modules'

import React from 'react'

import { Event } from '../../components/event-list'
import { ErrorMessage } from '../error'

export class HomePage extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props)

    // set the initial component state
    this.state = {
      errors: {},
      events: [],
      lastMonth: null,
    }

    this.getEventList = this.getEventList.bind(this)
    this.postEventStatusUpdate = this.postEventStatusUpdate.bind(this)
  }

  postEventStatusUpdate(eventId, status) {
    console.log(`Update ${eventId} to ${status}`)
  }

  /**
   * Get the events
   */
  getEventList() {
    let that = this

    let myRequest = apiRequest('GET')('/api/events?results=20')

    fetch(myRequest)
      .then(request => {
        if (!request.ok) {
          switch (request.status) {
            case 401:
              Auth.deauthenticateUser()
              this.props.history.replace('/auth/login')
              break

            default:
              throw new Error(request.statusText)
              break
          }
        }
        return request.json()
      })
      .then(data => {
        that.setState({ events: data })
      })
      .catch(function(err) {
        let error = {}
        if (!err.message) {
          error = new Error('🚧 Server unavailable. 🚧')
        } else {
          error = err
        }
        that.setState({
          errors: error,
        })
      })
  }

  componentDidMount() {
    this.getEventList()
  }

  /**
   * Render the component.
   */
  render() {
    var that = this
    return (
      <div>
        {that.state.errors.message && (
          <ErrorMessage message={that.state.errors.message} />
        )}
        {this.state.events.map(function(event) {
          return (
            <Event
              onChange={that.postEventStatusUpdate}
              errors={that.state.errors}
              event={event}
              lastMonth={that.state.lastMonth}
              key={event.eventId}
            />
          )
        })}
      </div>
    )
  }
}
