import React from 'react'
import PropTypes from 'prop-types'

export const Error = ({
  message,
}) => {
  return (
    <div>
      {message && <div className="card-panel red accent-1 center">{message}</div>}
    </div>
  )
}

Error.propTypes = {
  errorMessage: PropTypes.string.isRequired
};