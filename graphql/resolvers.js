import { advanceResolvers } from "../models/advance/advanceResolvers.js";
import { inscriptionResolvers } from "../models/inscription/inscriptionResolvers.js";
import { projectResolvers } from "../models/project/projectResolvers.js";
import { userResolvers } from "../models/user/userResolvers.js";
import { observationResolvers } from "../models/observation/observationResolvers.js";

const resolvers = [
  userResolvers,
  projectResolvers,
  advanceResolvers,
  inscriptionResolvers,
  observationResolvers,
];

export { resolvers };
