import React from 'react'
import Relay from 'react-relay'

import CreatePersonMutation from '../mutations/CreatePerson'

class Home extends React.Component {

  login() {
    console.log('Send Mutation')

    Relay.Store.commitUpdate(
      new CreatePersonMutation({
        person: {
          name: 'Arielle Marie',
          age: 24
        }
      }),
      {
        onSuccess: (res) => {
          console.log(res)
        }
      }
    )
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          {
            this.props.viewer.persons.map((person, key) => 
              <li key={key}>{person.name}</li>
            )
          }
        </ul>
        <button onClick={this.login}>Send Mutation</button>
      </div>
    )
  }
}

export default Relay.createContainer(Home, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        persons {
          name
          age
        }
      }
    `
  }
})