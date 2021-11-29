import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
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
    default: "INDEFINIDO"
  }
});

const userModel = model("User", userSchema);
export { userModel };
