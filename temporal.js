import connectDB from "./db/db.js";
import dotenv from "dotenv";
import { projectModel } from "./models/project/project.js";
import { userModel } from "./models/user/user.js";
import { advanceModel } from "./models/advance/advance.js";
import { inscriptionModel } from "./models/inscription/inscription.js";

dotenv.config();

const main = async () => {
  await connectDB();
};
main();
