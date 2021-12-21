import { gql } from "apollo-server-express";

const projectTypes = gql`
  type Objectives {
    _id: ID!
    objectiveDescription: String!
    objectiveType: String!
  }

  input objectiveFields {
    objectiveDescription: String
    objectiveType: Enum_ObjectiveType
  }

  input projectFields {
    projectName: String
    projectDescription: String
    projectShortDescription: String
    budget: Float
    startDate: Date
    endDate: Date
    status: Enum_ProjectStatus
    phase: Enum_ProjectPhase
    leader: String
  }

  type Project {
    _id: ID!
    projectName: String!
    projectDescription: String!
    projectShortDescription: String!
    budget: Float!
    startDate: Date!
    endDate: Date!
    status: Enum_ProjectStatus
    phase: Enum_ProjectPhase
    leader: User!
    objectives: [Objectives]
    advances: [Advance]
    inscriptions: [Inscription]
  }

  type Query {
    findAllProjects: [Project]
    findOneProject(_id: String!): Project
  }

  type Mutation {
    createProject(
      projectName: String!
      projectDescription: String!
      projectShortDescription: String!
      budget: Float!
      startDate: Date!
      endDate: Date!
      status: Enum_ProjectStatus
      phase: Enum_ProjectPhase
      leader: ID!
      objectives: [objectiveFields]
    ): Project

    editProject(_id: String!, fields: projectFields!): Project

    deleteProject(_id: String!): Project

    createObjective(projectID: String!, fields: objectiveFields!): Project

    editObjective(
      projectID: String!
      objectiveIndex: Int!
      fields: objectiveFields
    ): Project

    deleteObjective(projectID: String!, objectiveID: String!): Project
  }
`;

export { projectTypes };
