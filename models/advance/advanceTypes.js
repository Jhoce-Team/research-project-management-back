import { gql } from "apollo-server-express";

const advanceTypes = gql`
  type Observations {
    _id: ID!
    observationDate: Date!
    observationDescription: String!
    observationAuthor: User!
  }

  type Advance {
    _id: ID!
    advanceDate: Date!
    advanceDescription: String!
    observations: [Observations]
    project: Project!
    advanceAuthor: User!
  }

  type Query {
    findAllAdvances: [Advance]
    findOneAdvance(_id: String!): Advance
  }

  type Mutation {
    createAdvance(
      advanceDate: Date!
      advanceDescription: String!
      project: String!
      advanceAuthor: String!
    ): Advance

    editAdvance(
      _id: String!
      advanceDate: Date
      advanceDescription: String
      project: String
    ): Advance

    deleteAdvance(_id: String): Advance
  }
`;

export { advanceTypes };
