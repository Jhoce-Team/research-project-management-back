import { gql } from "apollo-server-express";

const advanceTypes = gql`
  input createObservation {
    observationReference: String!
  }

  type Advance {
    _id: ID!
    advanceDate: Date!
    advanceDescription: String!
    observations: [Observation]
    advanceProject: Project!
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
      observations: [String]
      advanceProject: String!
      advanceAuthor: String!
    ): Advance

    editAdvance(
      _id: String!
      advanceDate: Date
      advanceDescription: String
      observations: [String]
      advanceProject: String
      advanceAuthor: String
    ): Advance

    deleteAdvance(_id: String!): Advance
  }
`;

export { advanceTypes };
