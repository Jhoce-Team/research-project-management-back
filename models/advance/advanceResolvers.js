import { advanceModel } from "./advance.js";

const advanceResolvers = {
  Query: {
    findAllAdvances: async (parent, args) => {
      const advances = await advanceModel.find().populate([
        {
          path: "advanceProject",
          populate: {
            path: "leader",
          },
        },
        {
          path: "advanceAuthor",
        },
        {
          path: "observations",
          populate: {
            path: "observationAuthor",
          },
        },
      ]);
      return advances;
    },
    findOneAdvance: async (parent, args) => {
      const advance = await advanceModel.findById({ _id: args._id }).populate([
        {
          path: "advanceProject",
          populate: {
            path: "leader",
          },
        },
        {
          path: "observations",
          populate: {
            path: "observationAuthor",
          },
        },
        {
          path: "advanceAuthor",
        },
      ]);
      return advance;
    },
    filterAdvances: async (parent, args) => {
      const advancesFiltered = await advanceModel
        .find({
          project: args.projectID,
        })
        .populate([
          {
            path: "advanceProject",
            populate: {
              path: "leader",
            },
          },
          {
            path: "observations",
            populate: {
              path: "observationAuthor",
            },
          },
          {
            path: "advanceAuthor",
          },
        ]);
      return advancesFiltered;
    },
  },
  Mutation: {
    createAdvance: async (parent, args) => {
      const advance = await advanceModel.create({
        advanceDate: args.advanceDate,
        advanceDescription: args.advanceDescription,
        observations: args.observations,
        advanceProject: args.advanceProject,
        advanceAuthor: args.advanceAuthor,
      });
      return advance;
    },
    editAdvance: async (parent, args) => {
      const advanceEdited = await advanceModel.findByIdAndUpdate(
        args._id,
        {
          advanceDate: args.advanceDate,
          advanceDescription: args.advanceDescription,
          observations: args.observations,
          advanceProject: args.advanceProject,
          advanceAuthor: args.advanceAuthor,
        },
        { new: true }
      );
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
