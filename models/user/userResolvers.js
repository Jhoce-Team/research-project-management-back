import { userModel } from "./user.js";

const userResolvers = {
  Query: {
    findAllUsers: async (parent, args, context) => {
      if (context.userData.rol === "ADMINISTRADOR") {
        const users = await userModel.find().populate([
          {
            path: "projectsLed",
          },
          {
            path: "inscriptedProjects",
          },
          {
            path: "myAdvances",
          },
          {
            path: "myObservations",
          },
        ]);
        return users;
      } else if (context.userData.rol === "LIDER") {
        const users = await userModel.find({ rol: "ESTUDIANTE" });
        return users;
      } else {
        return null;
      }
    },
    findOneUser: async (parent, args) => {
      const user = await userModel.findById({ _id: args._id }).populate([
        {
          path: "projectsLed",
        },
        {
          path: "inscriptedProjects",
        },
        {
          path: "myAdvances",
        },
        {
          path: "myObservations",
        },
      ]);
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
      const userEdited = await userModel.findByIdAndUpdate(
        args._id,
        {
          userName: args.userName,
          userLastName: args.userLastName,
          identification: args.identification,
          email: args.email,
          rol: args.rol,
          status: args.status,
          country: args.country,
          userDescription: args.userDescription,
        },
        { new: true }
      );
      return userEdited;
    },
    deleteUser: async (parent, args) => {
      const userDeleted = await userModel.findByIdAndDelete({
        _id: args._id,
      });
      return userDeleted;
    },
  },
};

export { userResolvers };
