import * as React from 'react'
import { connect } from 'react-redux'
import Home from './Home'

import { requestPage } from '../actions/page'
import { requestSeminars } from '../actions/seminars'

class HomeContainer extends React.PureComponent {

  componentDidMount() {
  }

  render() {
    if (this.props.page.data.length === 0) return 'Loading'
    const sections = this.props.page.included.filter(incl => incl.type === 'node--section')
    // console.log(sections);
    return (
      <Home sections={ sections }  seminars={ this.props.seminars }/>
    )
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
  seminars: state.seminars
})
const mapDispatchToProps = {
  requestPage,
  requestSeminars,
}
HomeContainer.serverFetch = requestPage

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)