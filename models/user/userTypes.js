import { gql } from "apollo-server-express";

const userTypes = gql`
  type User {
    _id: ID!
    userName: String!
    userLastName: String!
    identification: String!
    email: String!
    rol: Enum_UserRol!
    status: Enum_UserStatus
    country: String
    userDescription: String
  }

  type Query {
    findAllUsers: [User]
    findOneUser(_id: String!): User
  }

  type Mutation {
    createUser(
      userName: String!
      userLastName: String!
      identification: String!
      email: String!
      rol: Enum_UserRol!
      status: Enum_UserStatus
      country: String
      userDescription: String
    ): User

    editUser(
      _id: String!
      userName: String!
      userLastName: String!
      identification: String!
      email: String!
      rol: Enum_UserRol!
      status: Enum_UserStatus
      country: String
      userDescription: String
    ): User

    deleteUser(_id: String, email: String): User
  }
`;

export { userTypes };
