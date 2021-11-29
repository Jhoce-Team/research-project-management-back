import { userModel } from "./user.js";

const userResolvers = {
  Query: {
    findAllUsers: async (parent, args) => {
      const users = await userModel.find();
      return users;
    },
    findOneUser: async (parent, args) => {
      const user = await userModel.findById({ _id: args._id });
      return user;
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const userCreated = await userModel.create({
        userName: args.userName,
        userLastName: args.userLastName,
        identification: args.identification,
        email: args.email,
        rol: args.rol,
        status: args.status,
        country: args.country,
        userDescription: args.userDescription,
      });
      return userCreated;
    },
    editUser: async (parent, args) => {
      const userEdited = await userModel.findOneAndUpdate(args._id, {
        userName: args.userName,
        userLastName: args.userLastName,
        identification: args.identification,
        email: args.email,
        rol: args.rol,
        status: args.status,
        country: args.country,
        userDescription: args.userDescription,
      });
    },
    deleteUser: async (parent, args) => {
      if (Object.keys(args).includes("_id")) {
        const userDeleted = await userModel.findByIdAndDelete({
          _id: args._id,
        });
        return userDeleted;
      } else if (Object.keys(args).includes("email")) {
        const userDeleted = await userModel.findOneAndDelete({
          email: args.email,
        });
        return userDeleted;
      }
    },
  },
};

export { userResolvers };
