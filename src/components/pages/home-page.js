import { GET_Request, Auth } from '@/modules'
import React, { Component } from 'react'
import { Event } from '@@/event-list'
import { ErrorMessage } from '@@/error/error'
import API_helpers from '@@/api'
import '@@/events.css'

export class HomePage extends Component {
  /**
   * Class constructor.
   *
   * @param {Object} props for this component
   */
  constructor(props) {
    super(props)

    // Initial component state (TODO: add redux application state manager)
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
      .then(response =>
        this::API_helpers.checkIfRequestHasBeenAllowed(response)
      )
      .then(acceptedResponse =>
        API_helpers.getDataFromResponse(acceptedResponse)
      )
      .then(data => this.setEvents(data))
      .catch(e => this::API_helpers.handleRequestErrors(e))
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
        {' '}
        {this.state.errors.message && (
          <ErrorMessage message={this.state.errors.message} />
        )}{' '}
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
        })}{' '}
      </div>
    )
  }
}
