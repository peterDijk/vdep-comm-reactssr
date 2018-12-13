import * as React from 'react'
import { connect } from 'react-redux'
import Home from './Home'

class HomeContainer extends React.PureComponent {


  render() {
    if (this.props.page.data.length === 0) return 'Loading'
    const sections = this.props.page.included.filter(incl => incl.type === 'node--section')
    return (
      <Home sections={ sections } />
    )
  }
}

const mapStateToProps = (state) => ({
  page: state.page
})

export default connect(mapStateToProps)(HomeContainer)