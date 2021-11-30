import { gql } from "apollo-server-express";
import { advanceTypes } from "../models/advance/advanceTypes.js";
import { inscriptionTypes } from "../models/inscription/inscriptionTypes.js";
import { projectTypes } from "../models/project/projectTypes.js";
import { userTypes } from "../models/user/userTypes.js";
import { observationTypes } from "../models/observation/observationTypes.js";
import { enums } from "../models/enums.js";

const globalTypes = gql`
  scalar Date
`;

const typeDefs = [
  globalTypes,
  enums,
  userTypes,
  projectTypes,
  advanceTypes,
  inscriptionTypes,
  observationTypes,
];

export { typeDefs };
