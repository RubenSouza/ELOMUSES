const mongoose = require("mongoose");

const AulaSchema = new mongoose.Schema(
  {
    aluno: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Referência ao modelo de usuário/aluno
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
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },

    assunto: {
      type: String,
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

// Aulas {
//     Aluno : Modelo de aluno.
//     Sobre: Violão / Teclado e etc
//     Tipo de aula(Aula única/ Aula recorrente / Reposição)
//     Data(dia, mês, ano e horário da aula da aula)
//     Assunto(Opcional)
//     Status da aula (Realizada / Não Realizada)
//  }
