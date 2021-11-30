import mongoose from "mongoose";
const { Schema, model } = mongoose;
import { userModel } from "../user/user.js";
import { projectModel } from "../project/project.js";
import { observationModel } from "../observation/observation.js";

const advanceSchema = new Schema({
  advanceDate: {
    type: Date,
    required: true,
  },
  advanceDescription: {
    type: String,
    required: true,
  },
  observations: [
    {
      type: Schema.Types.ObjectId,
      ref: observationModel,
      required: true,
    },
  ],
  advanceProject: {
    type: Schema.Types.ObjectId,
    ref: projectModel,
    required: true,
  },
  advanceAuthor: {
    type: Schema.Types.ObjectId,
    ref: userModel,
    required: true,
  },
});

const advanceModel = model("Advance", advanceSchema);

export { advanceModel };
