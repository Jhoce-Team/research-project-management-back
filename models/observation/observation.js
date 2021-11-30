import mongoose from "mongoose";
const { Schema, model } = mongoose;
import { userModel } from "../user/user.js";

const observationSchema = new Schema({
  observationDate: {
    type: Date,
    required: true,
  },
  observationDescription: {
    type: String,
    required: true,
  },
  observationAuthor: {
    type: Schema.Types.ObjectId,
    ref: userModel,
    required: true,
  },
});

const observationModel = model("Observation", observationSchema);

export { observationModel };
