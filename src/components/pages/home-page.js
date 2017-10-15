import { GET_Request, Auth } from '@/modules'
import React, { Component } from 'react'
import { Event } from '@@/event-list'
import { ErrorMessage } from '@@/error/error'
import '@@/events.css'

export class HomePage extends Component {
  /**
     * Class constructor.
     *
     * @param {Object} props for this component
     */
  constructor(props) {
    super(props)

    // set the initial component state
    this.state = {
      events: [],
      lastMonth: null,
      errors: {
        message: '',
      },
    }

    this.getEventList = ::this.getEventList
    this.postEventStatusUpdate = ::this.postEventStatusUpdate
  }

  postEventStatusUpdate(eventId, status) {
    console.log(`Update ${eventId} to ${status}`)
  }

  /**
     * Get the events
     */
  getEventList() {
    const myRequest = GET_Request('/api/events/1')
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
          }
        }
        return request.json()
      })
      .then(data => {
        this.setState({ events: data })
      })
      .catch(err => {
        let error
        if (!err.message) {
          error = new Error('🚧 Server unavailable. 🚧')
        } else {
          error = err
        }
        this.setState({
          errors: error,
        })
      })
  }

  componentDidMount() {
    this.getEventList()
  }

  /**
     * Render the component.
     *
     * @return {Component} Component home-page
     */
  render() {
    return (
      <div>
        {this.state.errors.message && (
          <ErrorMessage message={this.state.errors.message} />
        )}
        {this.state.events.map(event => {
          return (
            <Event
              onChange={this.postEventStatusUpdate}
              errors={this.state.errors}
              event={event}
              lastMonth={this.state.lastMonth}
              key={event.eventId}
            />
          )
        })}
      </div>
    )
  }
}
