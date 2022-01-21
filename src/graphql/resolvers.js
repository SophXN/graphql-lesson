// Object passed to client that lets it know what values to resolve that is called to the local client side
import {gql} from 'apollo-boost';

export const typeDefs = gql`
extends type Mutation {
  ToggleCartHidden: Boolean!
}
`

export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, _context, _info) =>
  }
}