import * as React from 'react'
import { connect } from 'react-redux'
import Home from './Home'

import { requestPage } from '../actions/page'

class HomeContainer extends React.PureComponent {

  testLog = () => {
    console.log('test')
  }

  render() {
    if (this.props.page.data.length === 0) return 'Loading'
    const sections = this.props.page.included.filter(incl => incl.type === 'node--section')
    return (
      <Home sections={ sections } testFn={this.testLog}/>
    )
  }
}

const mapStateToProps = (state) => ({
  page: state.page
})
HomeContainer.serverFetch = requestPage

export default connect(mapStateToProps)(HomeContainer)