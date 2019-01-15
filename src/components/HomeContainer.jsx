import * as React from 'react'
import { connect } from 'react-redux'
import Home from './Home'

import { requestPage } from '../actions/page'

class HomeContainer extends React.PureComponent {

  testLog = () => {
    console.log('test')
  }

  componentDidMount() {

  }

  render() {
    if (this.props.page.data.length === 0) return 'Loading'
    const sections = this.props.page.included.filter(incl => incl.type === 'node--section')
    console.log(sections);
    return (
      <Home sections={ sections } seminars={ this.props.seminars } />
    )
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
  seminars: state.seminars
})
HomeContainer.serverFetch = requestPage

export default connect(mapStateToProps)(HomeContainer)