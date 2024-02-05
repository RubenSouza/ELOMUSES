const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema(
  {
    aluno: {
      type: String,
      required: true,
    },
    quantidade: {
      type: Number,
      required: true,
    },
    valor: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pago", "Pendente", "Cancelado"],
      default: "Pendente",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", TicketSchema);
