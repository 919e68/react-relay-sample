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

import { PersonType } from './person'
import Person from '../../models/Person'

let ViewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: {
    persons: {
      type: new GraphQLList(PersonType),
      resolve: () => {
        return new Promise((resolve, reject) => {
          Person.find((err, persons) => {
            resolve(persons)
          })
        })
      }
    }
  }
})

export default ViewerType