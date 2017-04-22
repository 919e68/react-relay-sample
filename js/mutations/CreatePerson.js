import Relay from 'react-relay'

export default class LoginMutation extends Relay.Mutation {
  static fragments = {

  }

  getMutation() {
    return Relay.QL`mutation { createPerson }`
  }
  
  getFatQuery() {
    return Relay.QL`
      fragment on CreatePersonPayload {
        person {
          name
          age
        }
      }
    `
  }

  getConfigs() {
    return [{
      type: 'REQUIRED_CHILDREN',
      children: [
        Relay.QL`fragment on CreatePersonPayload {
          person {
            name
            age
          }
        }`
      ]
    }]
  }  

  getVariables() {
    return {
      input: this.props.person
    }
  }

  getOptimisticResponse() {
    return {
      person: this.props.person
    }
  }
}
