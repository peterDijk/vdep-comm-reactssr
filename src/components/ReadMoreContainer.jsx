import * as React from 'react'
import { connect } from 'react-redux'
import ReadMore from './ReadMore'

import { requestPage } from '../actions/page'

class ReadMoreContainer extends React.PureComponent {

  componentDidMount() {
    // this.sections = this.props.page.included.filter(incl => incl.attributes.field_slug === this.props.match.params.slug)
    console.log(this.props.match.params.slug)
  }

  render() {
    const sections = this.props.page.included.filter(incl => incl.attributes.field_slug === this.props.match.params.slug)
    return <ReadMore section={ sections[0] } />
  }
}

const mapStateToProps = (state) => ({ 
  page: state.page
})
ReadMoreContainer.serverFetch = requestPage

export default connect(mapStateToProps)(ReadMoreContainer)