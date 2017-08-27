import React from 'react'
import PropTypes from 'prop-types'

import moment from 'moment'
import { ErrorSummary } from './error-summary'

const failEvent = {
  event_start_datetime: new Date(),
  title: 'Title',
  location: 'Location',
  eventStatus: 'unknown'
}

export const Event = ({ onChange, errors, event, lastMonth }) => {
  console.dir(event)

  if (!event) {
    // fall back
    event = failEvent
  }

  const startDateTime = event.event_start_datetime;

  const startTime = moment(startDateTime).format('HH:mm')
  const dayNumber = moment(startDateTime).format('D')
  const dayName = moment(startDateTime).format('ddd')

  const monthName = moment(event.event_start_datetime).format('MMMM')

  return (
    <div>
      {errors.summary && <ErrorSummary errorSummary={errors.summary} />}
      {monthName !== lastMonth && <EventMonth monthName={monthName} />}
      < EventDisplay
        event={event}
        dayNumber={dayNumber}
        dayShortName={dayName}
        startTime={startTime}
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
          <p className="left-align">{dayNumber}</p>
          <p className="center-align event-date-month">{dayShortName}</p>
          <p className="center-align">{startTime}</p>
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