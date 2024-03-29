const mongoose = require("mongoose");
const Ticket = mongoose.model("Ticket");

const getSort = sort => {
  switch (sort) {
    case "Mais Novo":
      return { createdAt: -1 };
    case "Mais Antigo":
      return { createdAt: 1 };
    default:
      return { createdAt: 1 };
  }
};

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
    const page = req.query.page || 1;
    const limit = 10;

    try {
      const myAggregate = Ticket.aggregate();

      const options = {
        page: page,
        limit: limit,
      };

      const tickets = await Ticket.aggregatePaginate(myAggregate, options);

      return res.json(tickets);
    } catch (err) {
      return res.status(400).json({ error: "Erro ao listar tickets" });
    }
  },

  async indexPending(req, res, next) {
    const page = req.query.page || 1;
    const search = req.query.search || "";
    const limit = 7;

    try {
      const myAggregate = Ticket.aggregate([
        {
          $match: {
            status: "Pendente",
            aluno: { $regex: search, $options: "i" },
          },
        },
      ]);

      const options = {
        page: page,
        limit: limit,
        sort: getSort(req.query.sort),
      };

      const tickets = await Ticket.aggregatePaginate(myAggregate, options);

      return res.json(tickets);
    } catch (err) {
      return res.status(400).json({ error: "Erro ao listar tickets" });
    }
  },

  async indexConfirmed(req, res, next) {
    const page = req.query.page || 1;
    const search = req.query.search || "";
    const limit = 7;

    try {
      const myAggregate = Ticket.aggregate([
        {
          $match: {
            status: "Confirmado",
            aluno: { $regex: search, $options: "i" },
          },
        },
      ]);

      const options = {
        page: page,
        limit: limit,
        sort: getSort(req.query.sort),
      };

      const tickets = await Ticket.aggregatePaginate(myAggregate, options);

      return res.json(tickets);
    } catch (err) {
      return res.status(400).json({ error: "Erro ao listar tickets" });
    }
  },

  async indexCancelled(req, res, next) {
    const page = req.query.page || 1;
    const search = req.query.search || "";
    const limit = 7;

    try {
      const myAggregate = Ticket.aggregate([
        {
          $match: {
            status: "Cancelado",
            aluno: { $regex: search, $options: "i" },
          },
        },
      ]);

      const options = {
        page: page,
        limit: limit,
        sort: getSort(req.query.sort),
      };

      const tickets = await Ticket.aggregatePaginate(myAggregate, options);

      return res.json(tickets);
    } catch (err) {
      return res.status(400).json({ error: "Erro ao listar tickets" });
    }
  },

  async totalCancelledTickets(req, res, next) {
    const search = req.query.search || "";

    try {
      const tickets = await Ticket.find({
        status: "Cancelado",
        aluno: { $regex: search, $options: "i" },
      });

      const totalTickets = tickets.reduce(
        (total, ticket) => total + ticket.quantidade,
        0
      );

      return res.json({ totalTickets });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao listar tickets" });
    }
  },

  async totalConfirmedTickets(req, res, next) {
    const search = req.query.search || "";
    try {
      const tickets = await Ticket.find({
        status: "Confirmado",
        aluno: { $regex: search, $options: "i" },
      });

      const totalTickets = tickets.reduce(
        (total, ticket) => total + ticket.quantidade,
        0
      );

      return res.json({ totalTickets });
    } catch (err) {
      return res.status(400).json({ error: "Erro ao listar tickets" });
    }
  },

  async totalPendingTickets(req, res, next) {
    const search = req.query.search || "";
    try {
      const tickets = await Ticket.find({
        status: "Pendente",
        aluno: { $regex: search, $options: "i" },
      });

      const totalTickets = tickets.reduce(
        (total, ticket) => total + ticket.quantidade,
        0
      );

      return res.json({ totalTickets });
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
    const id = req.params.id;
    const { aluno, quantidade, valor, status } = req.body;

    try {
      const ticket = await Ticket.findById(id);
      if (!ticket) {
        return res.status(400).json({ error: "Ticket não encontrado" });
      }

      if (aluno) ticket.aluno = aluno;
      if (quantidade) ticket.quantidade = quantidade;
      if (valor) ticket.valor = valor;
      if (status) ticket.status = status;

      try {
        let newTicket = await ticket.save();
        return res.json({ newTicket });
      } catch (error) {
        console.log(error);
        return res.status(400).json({ error: "Erro ao atualizar ticket" });
      }
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
