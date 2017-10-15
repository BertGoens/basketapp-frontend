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
   * Get events
   */
  getEventList() {
    fetch(GET_Request('/api/events/1'))
      .then(response => this.checkIfRequestHasBeenAllowed(response))
      .then(acceptedResponse => this.getDataFromResponse(acceptedResponse))
      .catch(e => this.handleRequestErrors(e))
  }

  /**
   * Clear Errors
   */
  clearErrors() {
    this.setState({
      errors: {},
    })
  }

  /**
   * Set errors
   * @param {Any} err - Set the errors for the ErrorMessage component 
   */
  setErrors(err) {
    this.setState({
      errors: err,
    })
  }
  /**
   * Set the events
   * 
   * @param {Array} data - Set the events to display in a list 
   */
  setEvents(data) {
    this.setState({
      events: data,
    })
  }

  /**
   * Get the data from Response
   * 
   * @param {Response} response - Get the events data from response.json() 
   */
  getDataFromResponse(response) {
    response
      .json()
      .then(data => this.setEvents(data))
      .catch(() =>
        this.setErrors(new Error("Couldn't get the data via Fetch."))
      )
  }

  /**
   * Check if the Request was successful
   * 
   * @param {Response} response - Response object
   */
  checkIfRequestHasBeenAllowed(response) {
    return new Promise((resolve, reject) => {
      this.clearErrors()
      if (response.status === 200) {
        resolve(response)
      } else {
        reject(response)
      }
    })
  }

  /**
   * Handle the errors if there were any
   * 
   * @param {Reponse} response - Response object 
   */
  handleRequestErrors(response) {
    if (response.status === 401) {
      Auth.deauthenticateUser()
      this.props.history.push('/auth/login')
    } else {
      let error
      if (!response.statusText) {
        error = new Error('🚧 Server unavailable. 🚧')
      } else {
        error = response.statusText
      }
      this.setErrors(error)
    }
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
