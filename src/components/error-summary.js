import React from 'react'
import PropTypes from 'prop-types'

export const ErrorSummary = ({
  errorSummary,
}) => {
  return (
    <div>
      {errorSummary && <div className="card-panel red accent-1 center">{errorSummary}</div>}
    </div>
  )
}

ErrorSummary.propTypes = {
  errorSummary: PropTypes.string.isRequired
};