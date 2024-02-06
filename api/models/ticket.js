const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

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
      enum: ["Confirmado", "Pendente", "Cancelado"],
      default: "Pendente",
    },
  },
  {
    timestamps: true,
  }
);

TicketSchema.plugin(aggregatePaginate);

module.exports = mongoose.model("Ticket", TicketSchema);
