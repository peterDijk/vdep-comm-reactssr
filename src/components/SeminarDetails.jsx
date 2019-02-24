import * as React from 'react'
import { connect } from 'react-redux'
import { requestSeminars } from '../actions/seminars'

const SeminarDetails = (props) => {
  const { seminar } = props;
  return (
    <div>
      { seminar.attributes.title}
    </div>
  )
}

export default SeminarDetails