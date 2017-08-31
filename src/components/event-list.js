import React from 'react'
import PropTypes from 'prop-types'

import { Error } from './error'

export const Event = ({ onChange, errorMessage, event, lastMonth }) => {
  return (
    <div>
      {errorMessage && <Error message={errorMessage} />}
      {event.monthName !== lastMonth && <EventMonth monthName={event.monthName} />}

      < EventDisplay
        event={event}
        key={event.eventId}
      />
    </div>
  )
}

Event.PropTypes = {
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired,
  lastMonth: PropTypes.string.isRequired
}

const EventDisplay = ({ event, dayNumber, dayShortName, startTime }) => {
  return (
    <div >
      <EventDivider />

      <div key={event.id} className="row event-row">
        <div className="event-date col s3">
          <p className="left-align">{event.dayNumber}</p>
          <p className="center-align event-date-month">{event.dayShortName}</p>
          <p className="center-align">{event.startTime}</p>
        </div>
        <div className="col s7 event-brief">
          <p className="event-title truncate">{event.title}</p>
          <p className="event-location truncate">{event.location}</p>
        </div>
        <div className="col s2 event-status">
          <span className="event-status-center-helper"></span>
          <EventStatus event={event.eventStatus} />
        </div>
      </div>
    </div >
  )
}

const EventStatus = ({ eventStatus }) => {
  if (eventStatus === 'ok') {
    return <img className="event-status-image" src="/assets/img/event-status/StatusOk64x64.png" alt="OK" height="26" width="26"></img>
  } else if (eventStatus === 'notOk') {
    return <img className="event-status-image" src="/assets/img/event-status/StatusNotOk64x64.png" alt="OK" height="26" width="26"></img>
  } else {
    return <img className="event-status-image" src="/assets/img/event-status/StatusUnknown64x64.png" alt="OK" height="26" width="26"></img>
  }
}

EventStatus.PropTypes = {
  eventStatus: PropTypes.string.isRequired
}

// eslint-disable-next-line
const EventStatusActions = () => {
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

const EventDivider = () => {
  return (
    <div className="divider"></div>
  )
}

const EventMonth = ({ monthName }) => {
  return (
    <div>
      <EventDivider />
      <p className="center-align event-month light-blue-text text-accent-4">{monthName}</p>
    </div>
  )
}

EventMonth.PropTypes = {
  monthName: PropTypes.string.isRequired
}