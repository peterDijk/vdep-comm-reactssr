import * as React from 'react'
import { connect } from 'react-redux'
import { requestSeminars } from '../actions/seminars'

class SeminarsContainer extends React.PureComponent {

  render() {
    return null
  }
}
SeminarsContainer.serverFetch = requestSeminars

const mapStateToProps = state => {
  return {
    seminars : state.seminars
  }
}

export default connect(mapStateToProps)(SeminarsContainer)