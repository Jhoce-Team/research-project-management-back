import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userLastName: {
      type: String,
      required: true,
    },
    identification: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (email) => {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        },
        message: "The email format is wrong",
      },
    },
    password: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      required: true,
      enum: ["ESTUDIANTE", "LIDER", "ADMINISTRADOR"],
    },
    status: {
      type: String,
      enum: ["PENDIENTE", "AUTORIZADO", "RECHAZADO"],
      default: "PENDIENTE",
    },
    country: {
      type: String,
      default: "INDEFINIDO",
    },
    userDescription: {
      type: String,
      default: "INDEFINIDO",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.virtual("projectsLed", {
  ref: "Project",
  localField: "_id",
  foreignField: "leader",
});

userSchema.virtual("inscriptedProjects", {
  ref: "Inscription",
  localField: "_id",
  foreignField: "enrollmentStudent",
});

userSchema.virtual("myAdvances", {
  ref: "Advance",
  localField: "_id",
  foreignField: "advanceAuthor",
});

userSchema.virtual("myObservations", {
  ref: "Observation",
  localField: "_id",
  foreignField: "observationAuthor",
});

const userModel = model("User", userSchema);

export { userModel };
