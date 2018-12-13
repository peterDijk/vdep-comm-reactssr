import * as React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import routes from './routes'
import { connect } from 'react-redux'
import { reduxInit } from './actions/utils'
import { requestPage } from './actions/page'

import HeaderContainer from './components/HeaderContainer'
import HomeContainer from './components/HomeContainer'


class App extends React.Component {

  componentDidMount() {
    if (this.props.utils.initialized !== true) {
      this.props.reduxInit()
    }
    this.props.requestPage()

  }

  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <Switch>
          { routes.map(route => <Route key={ route.path } { ...route } />)}
          
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    utils: state.utils
  }
}

const mapDispatchToProps = {
  reduxInit,
  requestPage
}

export default connect(mapStateToProps, mapDispatchToProps)(App)