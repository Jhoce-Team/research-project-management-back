import { gql } from "apollo-server-express";

const projectTypes = gql`
  type Objectives {
    _id: ID!
    objectiveDescription: String!
    objectiveType: String!
  }

  input createObjective {
    objectiveDescription: String!
    objectiveType: Enum_ObjectiveType!
  }

  type Project {
    _id: ID!
    projectName: String!
    budget: Float!
    startDate: Date!
    endDate: Date!
    status: Enum_ProjectStatus
    phase: Enum_ProjectPhase
    leader: User!
    objectives: [Objectives]
  }

  type Query {
    findAllProjects: [Project]
    findOneProject(_id: String!): Project
  }

  type Mutation {
    createProject(
      projectName: String!
      budget: Float!
      startDate: Date!
      endDate: Date!
      status: Enum_ProjectStatus
      phase: Enum_ProjectPhase
      leader: ID!
      objectives: [createObjective]
    ): Project

    editProject(
      _id: String!
      projectName: String
      budget: Float
      startDate: Date
      endDate: Date
      status: Enum_ProjectStatus
      phase: Enum_ProjectPhase
      leader: String
      objectives: [createObjective]
    ): Project

    deleteProject(
      _id: String!
    ): Project
  }
`;

export { projectTypes };
