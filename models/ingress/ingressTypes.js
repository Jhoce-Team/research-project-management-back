import { gql } from "apollo-server-express";

const ingressTypes = gql`
  type Mutation {
    register(
      userName: String!
      userLastName: String!
      identification: String!
      email: String!
      rol: Enum_UserRol!
      country: String
      password: String!
    ): String!
  }
`;

export { ingressTypes };
