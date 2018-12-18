import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ReadMore from './ReadMore'

import { requestPage } from '../actions/page'

class ReadMoreContainer extends React.PureComponent {

  componentDidMount() {
  }

  render() {
    const sections = this.props.page.included.filter(incl => incl.attributes.field_slug === this.props.match.params.slug)
    if (sections.length === 0) return <Redirect to="/not-found"/>
    return <ReadMore section={ sections[0] } />
  }
}

const mapStateToProps = (state) => ({ 
  page: state.page
})
ReadMoreContainer.serverFetch = requestPage

export default connect(mapStateToProps)(ReadMoreContainer)