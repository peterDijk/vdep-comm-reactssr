import * as React from 'react'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'
import routes from './routes'
import { connect } from 'react-redux'
import { reduxInit } from './actions/utils'
import { requestPage } from './actions/page'

import HeaderContainer from './components/HeaderContainer'
import HomeContainer from './components/HomeContainer'
import ReadMoreContainer from './components/ReadMoreContainer'
import NotFound from './components/NotFound'
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history : null
    }
  }


  componentWillMount() {
    if (this.props.utils.initialized !== true) {
      this.props.reduxInit()
    }
    if (!this.props.page.data.length > 0) {
      this.props.requestPage()
    }

    this.setState({
      history: createMemoryHistory
    })

  }

  // componentDidUpdate() {
  //   console.log(this.props.match)
  // }

  render() {
    // console.log(this.state.history)
    return (
      <div className="App">
        <HeaderContainer />
            <Switch>
              { routes.map((route, index) => <Route key={ index } { ...route } />)}
            </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    utils: state.utils,
    page: state.page
  }
}

const mapDispatchToProps = {
  reduxInit,
  requestPage
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))