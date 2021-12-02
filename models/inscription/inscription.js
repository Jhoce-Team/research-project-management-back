import mongoose from "mongoose";
const { Schema, model } = mongoose;
import { projectModel } from "../project/project.js";
import { userModel } from "../user/user.js";

const inscriptionSchema = new Schema({
  inscriptionStatus: {
    type: String,
    enum: ["ACEPTADO", "RECHAZADO", "PENDIENTE"],
    default: "PENDIENTE",
  },
  admissionDate: {
    type: Date,
  },
  egressDate: {
    type: Date,
  },
  enrollmentProject: {
    type: Schema.Types.ObjectId,
    ref: projectModel,
    required: true,
  },
  enrollmentStudent: {
    type: Schema.Types.ObjectId,
    ref: userModel,
    required: true,
  },
});

const inscriptionModel = model("Inscription", inscriptionSchema);

export { inscriptionModel };
