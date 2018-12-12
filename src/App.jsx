import * as React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import routes from './routes'
import { connect } from 'react-redux'
import { reduxInit } from './actions/utils'

import HeaderContainer from './components/HeaderContainer'
import HomeContainer from './components/HomeContainer'


class App extends React.Component {

  componentDidMount() {
    this.props.reduxInit()
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
  reduxInit
}

export default connect(mapStateToProps, mapDispatchToProps)(App)