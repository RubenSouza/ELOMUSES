const mongoose = require("mongoose");

const AulaSchema = new mongoose.Schema(
  {
    aluno: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    sobre: {
      type: String,
      required: false,
      trim: true,
    },
    tipo: {
      type: String,
      enum: ["Aula única", "Aula recorrente", "Reposição"],
      required: true,
    },

    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },

    renewalDate: {
      type: String,
      required: false,
    },

    assunto: {
      type: String,
      required: false,
      trim: true,
    },
    status: {
      type: String,
      enum: ["Realizada", "Não realizada"],
      default: "Não Realizada",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Class", AulaSchema);
