import { projectModel } from "./project.js";

const projectResolvers = {
  Query: {
    findAllProjects: async (parent, args) => {
      const projects = await projectModel.find().populate([
        { path: "leader" },
        {
          path: "advances",
          populate: {
            path: "observations",
            populate: {
              path: "observationAuthor",
            },
          },
        },
        {
          path: "advances",
          populate: {
            path: "advanceAuthor",
          },
        },
        {
          path: "inscriptions",
          populate: {
            path: "enrollmentStudent",
          },
        },
      ]);
      return projects;
    },
    findOneProject: async (parent, args) => {
      const project = await projectModel.findOne({ _id: args._id }).populate([
        { path: "leader" },
        {
          path: "advances",
          populate: {
            path: "observations",
            populate: {
              path: "observationAuthor",
            },
          },
        },
        {
          path: "advances",
          populate: {
            path: "advanceAuthor",
          },
        },
        {
          path: "inscriptions",
          populate: {
            path: "enrollmentStudent",
          },
        },
      ]);
      return project;
    },
  },
  Mutation: {
    createProject: async (parent, args) => {
      const projectCreated = await projectModel.create({
        projectName: args.projectName,
        budget: args.budget,
        startDate: args.startDate,
        endDate: args.endDate,
        status: args.status,
        phase: args.phase,
        leader: args.leader,
        objectives: args.objectives,
      });
      return projectCreated;
    },
    editProject: async (parent, args) => {
      const projectEdited = await projectModel.findByIdAndUpdate(
        args._id,
        {
          ...args.fields,
        },
        { new: true }
      );
      return projectEdited;
    },
    deleteProject: async (parent, args) => {
      const projectDeleted = await projectModel.findByIdAndDelete({
        _id: args._id,
      });
      return projectDeleted;
    },
    createObjective: async (parent, args) => {
      const objectiveCreated = await projectModel.findByIdAndUpdate(
        args.projectID,
        {
          $addToSet: {
            objectives: { ...args.fields },
          },
        },
        { new: true }
      );
      return objectiveCreated;
    },
    editObjective: async (parent, args) => {
      const objectiveEdited = await projectModel.findByIdAndUpdate(
        args.projectID,
        {
          $set: {
            [`objectives.${args.objectiveIndex}.objectiveDescription`]:
              args.fields.objectiveDescription,
            [`objectives.${args.objectiveIndex}.objectiveType`]:
              args.fields.objectiveType,
          },
        },
        { new: true }
      );
      return objectiveEdited;
    },
    deleteObjective: async (parent, args) => {
      const objectiveDeleted = await projectModel.findByIdAndUpdate(
        args.projectID,
        {
          $pull: {
            objectives: {
              _id: args.objectiveID,
            },
          },
        },
        { new: true }
      );
      return objectiveDeleted;
    },
  },
};

export { projectResolvers };
