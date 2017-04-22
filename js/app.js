import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import Relay from 'react-relay'

import {
  Route,
  Router,
  IndexRoute,
  applyRouterMiddleware,
  browserHistory
} from 'react-router'

import useRelay from 'react-router-relay'

import App from './components/App'
import Home from './components/Home'
import Login from './components/users/Login'

const ViewerQueries = {
  viewer: () => Relay.QL`query { viewer }`
}

ReactDOM.render((
  <Router history={browserHistory} render={applyRouterMiddleware(useRelay)} environment={Relay.Store}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} queries={ViewerQueries} />
      <Route path='/login' component={Login} />
    </Route>
  </Router>
), document.getElementById('root'))