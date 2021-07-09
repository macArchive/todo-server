import { ApolloServer, gql } from 'apollo-server'

// Define Schema
const typeDefs = gql`
  type User {
    id: ID!
    username: String
    email: String
    tasks: [Task]
  }
  type Task {
    id: ID!
    text: String
    complete: String
    user: User
    userId: ID!
`

// Define Data
const data = {
  users: [
    {
      id: 1,
      username: 'mac9',
      email: 'machooper9@gmail.com'
    }
  ],
  tasks: [
    {
      id: 1,
      text: 'Complete todo list',
      complete: false,
      userId: 1
    }
  ]
}

// Define Resolvers
const resolvers = {
  Query: {
    users: () => data.users,
    tasks: () => data.tasks
  }
}

// Initialize Server
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`✔️ Server ready at ${url}`)
})
