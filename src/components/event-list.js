import React from 'react'
import moment from 'moment'

export class EventList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: null,
      lastMonth: null
    }
  }

  GetEventList() {
    return fetch('/events?results=20')
      .then((data) => {
        // TODO work with cache
        this.setState({ events: data.results })
      })
  }

  componentDidMount() {
    this.GetEventList()
  }

  render() {
    if (this.state.events != null) {
      const eventList = this.state.events.map((item, i) => {
        console.dir(item)
        const startDateTime = item.event_start_datetime;

        const startTime = moment(startDateTime).format('HH:mm')
        const dayNumber = moment(startDateTime).format('D')
        const dayName = moment(startDateTime).format('ddd')

        const monthName = moment(item.dataValues.event_start_datetime).format('MMMM')
        if (monthName !== this.state.lastMonth) {
          return (
            <div>
              <EventMonth />
              < Event event={item} dayNumber={dayNumber} dayShortName={dayName} startTime={startTime} />
            </div>
          )
        } else {
          return (
            < Event event={item} dayNumber={dayNumber} dayShortName={dayName} startTime={startTime} />
          )
        }
      })

      return eventList
    } else {
      return null
    }
  }
}

const Event = (props) => {
  return (
    <div >
      <EventDivider />

      <div key={props.event.id} className="row event-row">
        <div className="event-date col s3">
          <p className="left-align">{props.dayNumber}</p>
          <p className="center-align event-date-month">{props.dayShortName}</p>
          <p className="center-align">{props.startTime}</p>
        </div>
        <div className="col s7 event-brief">
          <p className="event-title truncate">{props.event.Title}</p>
          <p className="event-location truncate">{props.event.location}</p>
        </div>
        <div className="col s2 event-status">
          <span className="event-status-center-helper"></span>
          <EventStatus event={props.event} />
        </div>
      </div>
    </div >
  )
}

const EventStatus = (props) => {
  const ok = <img className="event-status-image" src="/assets/img/event-status/StatusOk64x64.png" alt="OK" height="26" width="26"></img>
  const notOk = <img className="event-status-image" src="/assets/img/event-status/StatusNotOk64x64.png" alt="OK" height="26" width="26"></img>
  const unknown = <img className="event-status-image" src="/assets/img/event-status/StatusUnknown64x64.png" alt="OK" height="26" width="26"></img>

  let result
  switch (props.event.status) {
    case 'ok':
      result = ok
      break;
    case 'notOk':
      result = notOk
      break;
    case 'unknown':
      result = unknown
      break;
    default:
      result = unknown
      break;
  }

  return (
    { result }
  )
}

// eslint-disable-next-line
const EventStatusActions = (props) => {
  return (
    <div className="event-status-actions">
      <div className="col s3">
        <a className="btn waves-effect waves-light green">Going</a>
      </div>
      <div className="col s3">
        <a className="btn waves-effect waves-light amber accent-3">Maybe</a>
      </div>
      <div className="col s3">
        <a className="btn waves-effect waves-light red accent-2">No</a>
      </div>
    </div>
  )
}

const EventDivider = (props) => {
  return (
    <div className="divider"></div>
  )
}

const EventMonth = (props) => {
  return (
    <div>
      <EventDivider />
      <p className="center-align event-month light-blue-text text-accent-4">{props.monthName}</p>
    </div>
  )
}
