import { gql } from "apollo-server-express";

const observationTypes = gql`
  type Observation {
    _id: ID!
    observationDate: Date!
    observationDescription: String!
    observationAuthor: User!
  }

  type Query {
    findAllObservations: [Observation]
    findOneObservation(_id: String!): Observation
  }

  type Mutation {
    createObservation(
      observationDate: Date!
      observationDescription: String!
      observationAuthor: String!
    ): Observation

    editObservation(
      _id: String!
      observationDate: Date
      observationDescription: String
      observationAuthor: String
    ): Observation

    deleteObservation(_id: String!): Observation
  }
`;

export { observationTypes };
