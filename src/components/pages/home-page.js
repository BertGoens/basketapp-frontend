import '../../components/events.css'

import React from 'react';

import { Event } from '../../components/event-list'

export class HomePage extends React.Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      events: {},
      lastMonth: null,
    };

    this.getEventList = this.getEventList.bind(this);
    this.postEventStatusUpdate = this.postEventStatusUpdate.bind(this);
  }

  postEventStatusUpdate(eventId, status) {
    console.log(`Update ${eventId} to ${status}`)
  }

  /**
   * Get the events
   */
  getEventList() {
    let myInit = {
      method: 'GET',
      credentials: 'include', //pass cookies, for authentication
      headers: new Headers({
        'Accept': 'application/json'
      }),
    };

    let url = '/api/events?results=20'

    let myRequest = new Request(url, myInit);

    fetch(myRequest)
      .then((data) => {
        data.json()
      })
      // Change component state
      .then((data) => {
        // TODO work with cache
        this.setState({ events: data.results })
      }).catch((error) => {
        if (!error.summary) {
          error.summary = '🚧 Server unavailable. 🚧'
        }
        this.setState({
          errors: error
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
    return (
      <div>
        <Event
          onChange={this.postEventStatusUpdate}
          errors={this.state.errors}
          event={this.state.events[0]}
          lastMonth={this.state.lastMonth}
        />
      </div>
    );
  }
}