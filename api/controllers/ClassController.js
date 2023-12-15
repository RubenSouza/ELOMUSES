const mongoose = require("mongoose");
const Class = mongoose.model("Class");

const ClassController = {
  // REGISTER

  async register(req, res, next) {
    const { aluno, title, sobre, tipo, assunto, status, start, end } = req.body;

    try {
      if (tipo === "Aula recorrente") {
        let dataV = new Date(start);
        let endV = new Date(end);

        const newClass = await Class.create({
          aluno,
          title,
          sobre,
          tipo,
          assunto,
          status,
          start: new Date(dataV),
          end: new Date(endV),
        });

        const tresMesesDepois = new Date();
        tresMesesDepois.setMonth(tresMesesDepois.getMonth() + 3);

        while (dataV < tresMesesDepois) {
          dataV.setDate(dataV.getDate() + 7);
          endV.setDate(endV.getDate() + 7);

          await Class.create({
            aluno,
            title,
            sobre,
            tipo,
            assunto,
            status,
            start: new Date(dataV),
            end: new Date(endV),
          });
        }

        return res.json({ newClass });
      } else {
        // Se não for recorrente, cria apenas o evento inicial
        const newClass = await Class.create({
          aluno,
          title,
          sobre,
          tipo,
          assunto,
          status,
          start,
          end,
        });

        return res.json({ newClass });
      }
    } catch (err) {
      return next(err);
    }
  },

  // UPDATE

  //DELETE by ID

  async deleteById(req, res, next) {
    try {
      const aula = await Class.findByIdAndDelete(req.params.id);

      return res.send({ deleted: true });
    } catch (err) {
      return next(err);
    }
  },
  //INDEX

  async index(req, res, next) {
    try {
      const aulas = await Class.find();

      return res.send({ aulas });
    } catch (err) {
      return next(err);
    }
  },

  async getThreeMonths(req, res, next) {
    try {
      const currentDate = new Date();
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

      const allClasses = await Class.find({
        $or: [
          { start: { $gte: currentDate.toISOString().split("T")[0] } }, // Aulas futuras
          {
            start: {
              $gte: threeMonthsAgo.toISOString().split("T")[0],
              $lte: currentDate.toISOString().split("T")[0],
            },
          }, // Aulas passadas até 3 meses atrás
        ],
      });

      return res.send({ allClasses });
    } catch (err) {
      return next(err);
    }
  },

  //SHOW

  //GET BY ALUNO

  async getByStudent(req, res, next) {
    const aluno = req.params.id;

    try {
      const aulas = await Class.find({ aluno });

      return res.send({ aulas });
    } catch (err) {
      return next(err);
    }
  },
};

module.exports = ClassController;

// title,
// aluno: "id do aluno",
// sobre: "Violão, teclado, etc",
// tipo: "Aula única / Aula recorrente / Reposição",
// assunto: "Opcional",
// status: "Não Realizada",
// inicio: inicio da aula(data e horário)),
// fim: fim da aula(data e horário),
