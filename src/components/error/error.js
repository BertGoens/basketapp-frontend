import React from 'react'
import PropTypes from 'prop-types'

export const ErrorMessage = ({ message }) => {
  return (
    <div>
      {message && (
        <div className="card-panel red center">{message}</div>
      )}
    </div>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
}
