import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql'

let PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: {
    name: { 
      type: GraphQLString 
    },
    age: { 
      type: GraphQLInt 
    }
  }
})

let PersonInput = new GraphQLInputObjectType({
  name: 'PersonInput',
  fields: {
    name: { 
      type: GraphQLString 
    },
    age: { 
      type: GraphQLInt 
    }
  }
})

  
export { PersonType, PersonInput }
