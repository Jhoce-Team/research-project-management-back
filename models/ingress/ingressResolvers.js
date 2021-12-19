import { userModel } from "../user/user.js";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/tokenUtils.js";

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
      return {
        token: generateToken({
          _id: newUser._id,
          userName: newUser.userName,
          userLastName: newUser.userLastName,
          identification: newUser.identification,
          email: newUser.email,
          country: newUser.country,
          rol: newUser.rol,
        }),
      };
    },

    login: async (parent, args) => {
      const user = await userModel.findOne({ email: args.email });
      if (await bcrypt.compare(args.password, user.password)) {
        return {
          token: generateToken({
            _id: user._id,
            userName: user.userName,
            userLastName: user.userLastName,
            identification: user.identification,
            email: user.email,
            country: user.country,
            rol: user.rol,
          }),
        };
      }
    },

    validateToken: async (parent, args, context) => {
      console.log(context);
    },
  },
};

export { ingressResolvers };
