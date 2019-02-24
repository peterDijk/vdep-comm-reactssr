import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ReadMore from './ReadMore'

import { requestPage } from '../actions/page'
import { requestSeminars } from '../actions/seminars'
import SeminarDetails from './SeminarDetails';

class SeminarDetailsContainer extends React.PureComponent {

  componentDidMount() {
    if (!this.props.seminars.data) {
      this.props.requestSeminars();
    }
  }

  render() {
    const seminar = this.props.seminars.data.find(sem => sem.id === this.props.match.params.id)
    if (!seminar) return <Redirect to="/not-found"/>
    return <SeminarDetails seminar={seminar} />
  }
}

const mapStateToProps = (state) => ({ 
  seminars: state.seminars
})

const mapDispatchToProps = {
  requestSeminars,
}
SeminarDetailsContainer.serverFetch = requestPage

export default connect(mapStateToProps, mapDispatchToProps)(SeminarDetailsContainer)