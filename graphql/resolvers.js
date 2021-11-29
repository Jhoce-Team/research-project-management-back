import { advanceResolvers } from "../models/advance/advanceResolvers.js";
import { inscriptionResolvers } from "../models/inscription/inscriptionResolvers.js";
import { projectResolvers } from "../models/project/projectResolvers.js";
import { userResolvers } from "../models/user/userResolvers.js";

const resolvers = [
  userResolvers,
  projectResolvers,
  advanceResolvers,
  inscriptionResolvers,
];

export { resolvers };
