import { observationModel } from "./observation.js";

const observationResolvers = {
  Query: {
    findAllObservations: async (parent, args) => {
      const observations = await observationModel.find().populate([
        {
          path: "observationAuthor",
        },
        {
          path: "advanceFather",
        },
      ]);
      return observations;
    },
    findOneObservation: async (parent, args) => {
      const observation = observationModel
        .findById({ _id: args._id })
        .populate([
          {
            path: "observationAuthor",
          },
          {
            path: "advanceFather",
          },
        ]);
      return observation;
    },
  },
  Mutation: {
    createObservation: async (parent, args) => {
      const observationCreated = await observationModel.create({
        observationDate: args.observationDate,
        observationDescription: args.observationDescription,
        observationAuthor: args.observationAuthor,
      });
      return observationCreated;
    },
    editObservation: async (parent, args) => {
      const observationEdited = await observationModel.findByIdAndUpdate(
        args._id,
        {
          observationDate: args.observationDate,
          observationDescription: args.observationDescription,
          observationAuthor: args.observationAuthor,
        },
        { new: true }
      );
      return observationEdited;
    },
    deleteObservation: async (parent, args) => {
      const observationDeleted = await observationModel.findByIdAndDelete({
        _id: args._id,
      });
      return observationDeleted;
    },
  },
};

export { observationResolvers };
