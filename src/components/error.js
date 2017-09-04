import React from 'react'
import PropTypes from 'prop-types'

export const ErrorMessage = ({
  message,
}) => {
  return (
    <div>
      {message && <div className="card-panel red accent-1 center">{message}</div>}
    </div>
  )
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired
};