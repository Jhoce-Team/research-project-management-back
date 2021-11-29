import { advanceModel } from "./advance.js";

const advanceResolvers = {
  Query: {
    findAllAdvances: async (parent, args) => {
      const advances = await advanceModel.find();
      return advances;
    },
    findOneAdvance: async (parent, args) => {
      const advance = await advanceModel
        .findOne({ _id: args._id })
        .populate("project", "user");
      return advance;
    },
  },
  Mutation: {
    createAdvance: async (parent, args) => {
      const advance = await advanceModel.create({
        advanceDate: args.advanceDate,
        advanceDescription: args.advanceDescription,
        observations: args.observations,
        project: args.project,
        advanceAuthor: args.advanceAuthor,
      });
      return advance;
    },
    editAdvance: async (parent, args) => {
      const advanceEdited = await advanceModel.findByIdAndUpdate(args._id, {
        advanceDate: args.advanceDate,
        advanceDescription: args.advanceDescription,
        observations: args.observations,
        project: args.project,
        advanceAuthor: args.advanceAuthor,
      });
      return advanceEdited;
    },
    deleteAdvance: async (parent, args) => {
      const advanceDeleted = await advanceModel.findByIdAndDelete({
        _id: args._id,
      });
      return advanceDeleted;
    },
  },
};

export { advanceResolvers };
