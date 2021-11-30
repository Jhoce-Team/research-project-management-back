import { inscriptionModel } from "./inscription.js";

const inscriptionResolvers = {
  Query: {
    findAllInscriptions: async (parent, args) => {
      const inscriptions = await inscriptionModel.find().populate([
        {
          path: "enrollmentProject",
          populate: {
            path: "leader",
          },
        },
        {
          path: "enrollmentStudent",
        },
      ]);
      return inscriptions;
    },
    findOneInscription: async (parent, args) => {
      const inscription = await inscriptionModel
        .findById({ _id: args._id })
        .populate([
          {
            path: "enrollmentProject",
            populate: {
              path: "leader",
            },
          },
          {
            path: "enrollmentStudent",
          },
        ]);
      return inscription;
    },
  },
  Mutation: {
    createInscription: async (parent, args) => {
      const inscriptionCreated = await inscriptionModel.create({
        inscriptionStatus: args.inscriptionStatus,
        admissionDate: args.admissionDate,
        egressDate: args.egressDate,
        enrollmentProject: args.enrollmentProject,
        enrollmentStudent: args.enrollmentStudent,
      });
      return inscriptionCreated;
    },
    editInscription: async (parent, args) => {
      const inscriptionEdited = await inscriptionModel.findByIdAndUpdate(
        args._id,
        {
          inscriptionStatus: args.inscriptionStatus,
          admissionDate: args.admissionDate,
          egressDate: args.egressDate,
          enrollmentProject: args.enrollmentProject,
          enrollmentStudes: args.enrollementStudent,
        }
      );
      return inscriptionEdited;
    },
    deleteInscription: async (parent, args) => {
      const inscriptionDeleted = await inscriptionModel.findByIdAndDelete({
        _id: args._id,
      });
      return inscriptionDeleted;
    },
  },
};

export { inscriptionResolvers };
