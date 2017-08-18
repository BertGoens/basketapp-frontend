import './components/home.css'

import React from 'react';

import { EventList } from './components/event'

export const Home = (props) => {
  return (
    <div>
      <h1>Under Maintenance</h1>
      <EventList />
    </div>
  )
}