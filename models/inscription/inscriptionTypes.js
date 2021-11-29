import { gql } from "apollo-server-express";

const inscriptionTypes = gql`
  type Inscription {
    _id: ID!
    inscriptionStatus: Enum_InscriptionStatus
    admissionDate: Date!
    egressDate: Date
    enrollmentProject: Project!
    enrollmentStudent: User!
  }

  type Query {
    findAllInscriptions: [Inscription]
    findOneInscription(_id:String!): Inscription
  }

  type Mutation {
    createInscription(
      inscriptionStatus: Enum_InscriptionStatus
      admissionDate: Date!
      egressDate: Date
      enrollmentProject: String!
      enrollmentStudent: String!
    ): Inscription

    editInscription(
      _id: ID!
      inscriptionStatus: Enum_InscriptionStatus
      admissionDate: Date
      egressDate: Date
      enrollmentProject: String
      enrollmentStudent: String
    ): Inscription

    deleteInscription(_id: String!): Inscription
  }
`;

export { inscriptionTypes };
