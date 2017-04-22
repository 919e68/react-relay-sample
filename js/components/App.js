import React from 'react'
import Relay from 'react-relay'
import { Link, withRouter } from 'react-router'

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App