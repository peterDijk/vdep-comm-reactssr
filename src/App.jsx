import * as React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import routes from './routes'
import HeaderContainer from './components/HeaderContainer'
import HomeContainer from './components/HomeContainer'

class App extends React.Component {
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

export default App;