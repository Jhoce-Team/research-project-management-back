import { userModel } from "../user/user.js";
import bcrypt from "bcrypt";

const ingressResolvers = {
  Mutation: {
    register: async (parent, args) => {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(args.password, salt);
      const newUser = await userModel.create({
        userName: args.userName,
        userLastName: args.userLastName,
        identification: args.identification,
        country: args.country,
        email: args.email,
        rol: args.rol,
        password: hashedPassword,
      });
      console.log("Created user", newUser);
      return "Insertar el token a retornar";
    },
  },
};

export { ingressResolvers };
