const mongoose = require("mongoose");
const Ticket = mongoose.model("Ticket");

const TicketController = {
  async register(req, res, next) {
    const { aluno, quantidade, valor, status } = req.body;

    try {
      const newTicket = await Ticket.create({
        aluno,
        quantidade,
        valor,
        status,
      });

      return res.json({ newTicket });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao registrar ticket" });
    }
  },

  async index(req, res, next) {
    try {
      const tickets = await Ticket.find();

      return res.json({ tickets });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao listar tickets" });
    }
  },

  async findByAluno(req, res, next) {
    const { aluno } = req.params;

    try {
      const tickets = await Ticket.find({ aluno });

      return res.json({ tickets });
    } catch (err) {
      return res
        .status(400)
        .json({ error: "Erro ao buscar ingressos do aluno" });
    }
  },

  async show(req, res, next) {
    const { ticketId } = req.params;

    try {
      const ticket = await Ticket.findById(ticketId);

      return res.json({ ticket });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao mostrar ticket" });
    }
  },

  async update(req, res, next) {
    const { ticketId } = req.params;
    const { aluno, quantidade, valor, status } = req.body;

    try {
      const ticket = await Ticket.findByIdAndUpdate(
        ticketId,
        { aluno, quantidade, valor, status },
        { new: true }
      );
      return res.json({ ticket });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao atualizar ticket" });
    }
  },

  async delete(req, res, next) {
    const id = req.params.id;

    try {
      await Ticket.findByIdAndDelete(id);

      return res.send({ deleted: true });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao deletar ticket" });
    }
  },
};

module.exports = TicketController;
