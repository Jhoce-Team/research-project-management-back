import mongoose from "mongoose";
const { Schema, model } = mongoose;
import { userModel } from "../user/user.js";

const projectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: true,
      unique: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["ACTIVO", "INACTIVO"],
      default: "INACTIVO",
    },
    phase: {
      type: String,
      enum: ["INICIADO", "DESARROLLO", "TERMINADO", "NULO"],
      default: "NULO",
    },
    leader: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: userModel,
    },
    objectives: [
      {
        objectiveDescription: {
          type: String,
          required: true,
        },
        objectiveType: {
          type: String,
          enum: ["GENERAL", "ESPECIFICO"],
          required: true,
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

projectSchema.virtual("advances", {
  ref: "Advance",
  localField: "_id",
  foreignField: "advanceProject",
});

projectSchema.virtual("inscriptions", {
  ref: "Inscription",
  localField: "_id",
  foreignField: "enrollmentProject",
});

const projectModel = model("Project", projectSchema);

export { projectModel };
