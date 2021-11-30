import { projectModel } from "./project.js";

const projectResolvers = {
  Query: {
    findAllProjects: async (parent, args) => {
      const projects = await projectModel.find().populate("leader");
      return projects;
    },
    findOneProject: async (parent, args) => {
      const project = await projectModel.findOne({ _id: args._id }).populate("leader");
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
      })
      return projectCreated;
    },
    editProject: async (parent, args) => {
      const projectEdited = await projectModel.findByIdAndUpdate(args._id, {
        projectName: args.projectName,
        budget: args.budget,
        startDate: args.startDate,
        endDate: args.endDate,
        status: args.status,
        phase: args.phase,
        leader: args.leader,
        objectives: args.objectives,
      });
      return projectEdited;
    },
    deleteProject: async (parent, args) => {
      const projectDeleted = await projectModel.findByIdAndDelete({
        _id: args._id,
      });
      return projectDeleted;
    },
  },
};

export { projectResolvers };
