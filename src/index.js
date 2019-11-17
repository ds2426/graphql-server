const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('../resolvers/Query')
const Subscription = require('../resolvers/Subscriptions')
const Mutation = require('../resolvers/Mutations')
const User = require('../resolvers/User')
const Link = require('../resolvers/Link')
const Vote = require('../resolvers/Vote')
//1
const resolvers = {
    Query,
    Mutation,
    Subscription,
    Link,
    User,
    Vote
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
      return {
        ...request,
        prisma,
      }
    },
  })



server.start(() => console.log('Server is running on http://localhost:4000')

)