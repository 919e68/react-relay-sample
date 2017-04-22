import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql'

import {
  mutationWithClientMutationId
} from 'graphql-relay'

import { PersonType, PersonInput } from './types/person'
import ViewerType from './types/viewer'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      viewer: {
        type: ViewerType,
        resolve: (root, {}, { session }) => {
          console.log(session.id)
          
          return { }
        }
      }
    }
  }),

  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createPerson: mutationWithClientMutationId({
        name: 'CreatePerson',
        inputFields: {
          input: {
            type: PersonInput
          }
        },
        outputFields: {
          person: {
            type: PersonType,
            resolve: (payload) => {
              return payload
            }
          }
        },
        mutateAndGetPayload: (args, { session }) => {
          return new Promise((resolve, reject) => {
            console.log(session.id)

            reject('empty')
          })
        }
      })
    }
  })

})
