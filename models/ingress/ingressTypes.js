import { gql } from "apollo-server-express";

const ingressTypes = gql`
  type Token {
    token: String
    error: String
  }

  type Mutation {
    register(
      userName: String!
      userLastName: String!
      identification: String!
      email: String!
      rol: Enum_UserRol!
      country: String
      password: String!
    ): Token!

    login(email: String!, password: String!): Token

    validateToken: Token
  }
`;

export { ingressTypes };
