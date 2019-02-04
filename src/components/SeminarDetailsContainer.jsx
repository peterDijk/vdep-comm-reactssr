import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ReadMore from './ReadMore'

import { requestPage } from '../actions/page'

class SeminarDetailsContainer extends React.PureComponent {

  componentDidMount() {
  }

  render() {
    const seminar = this.props.seminars.find(sem => sem.id === this.props.match.params.id)
    if (!seminar) return <Redirect to="/not-found"/>
    return <ReadMore />
  }
}

const mapStateToProps = (state) => ({ 
  seminars: state.seminars
})
// ReadMoreContainer.serverFetch = requestPage

export default connect(mapStateToProps)(SeminarDetailsContainer)