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
          start: dataV.toISOString(),
          end: endV.toISOString(),
          renewalDate: null,
        });

        let oneYearAfter = new Date(dataV);
        oneYearAfter.setFullYear(oneYearAfter.getFullYear() + 1);

        while (dataV < oneYearAfter) {
          dataV.setUTCDate(dataV.getUTCDate() + 7);
          endV.setUTCDate(endV.getUTCDate() + 7);

          await Class.create({
            aluno,
            title,
            sobre,
            tipo,
            assunto,
            status,
            start: dataV.toISOString(),
            end: endV.toISOString(),
            renewalDate: oneYearAfter.toISOString(),
          });
        }

        return res.json({ newClass });
      } else {
        const newClass = await Class.create({
          aluno,
          title,
          sobre,
          tipo,
          assunto,
          status,
          start,
          end,
          renewalDate: null,
        });

        return res.json({ newClass });
      }
    } catch (err) {
      return next(err);
    }
  },

  //RENEW DATES

  // async renewDates(req, res, next) {
  //   try {
  //     const currentDate = new Date();

  //     const classesToRenew = await Class.find({
  //       renewalDate: { $lt: currentDate.toISOString() },
  //     });

  //     if (classesToRenew.length === 0) {
  //       return res.json({ message: "Não existem aulas a renovar" });
  //     }

  //     for (const classObj of classesToRenew) {
  //       if (classObj.tipo === "Aula recorrente") {
  //         let dataV = new Date(classObj.start);
  //         let endV = new Date(classObj.end);

  //         const tresMesesDepois = new Date();
  //         tresMesesDepois.setMonth(tresMesesDepois.getMonth() + 3);

  //         while (dataV < tresMesesDepois) {
  //           await Class.create({
  //             aluno: classObj.aluno,
  //             title: classObj.title,
  //             sobre: classObj.sobre,
  //             tipo: classObj.tipo,
  //             assunto: classObj.assunto,
  //             status: classObj.status,
  //             start: dataV.toISOString(),
  //             end: endV.toISOString(),
  //             renewalDate: tresMesesDepois.toISOString(),
  //           });

  //           // Adicionar uma semana
  //           dataV.setUTCDate(dataV.getUTCDate() + 7);
  //           endV.setUTCDate(endV.getUTCDate() + 7);
  //         }

  //         // Atualizar a data de renovação da aula original
  //         const tresMesesDepoisBase = new Date(classObj.renewalDate);
  //         tresMesesDepoisBase.setMonth(tresMesesDepoisBase.getMonth() + 3);

  //         classObj.renewalDate = tresMesesDepoisBase.toISOString();
  //         await classObj.save();
  //       }
  //     }

  //     return res.json({ message: "Aulas renovadas com sucesso." });
  //   } catch (err) {
  //     console.error("Erro ao verificar e renovar aulas:", err);
  //     return res.json({ error: "Erro ao renovar aulas." });
  //   }
  // },

  // UPDATE

  async update(req, res, next) {
    const { title, aluno, tipo, sobre, assunto, status, start, end } = req.body;
    const id = req.params.id;

    try {
      const classToUpdate = await Class.findById(id);

      if (classToUpdate) {
        const { tipo: currentType } = classToUpdate;

        if (currentType === "Aula recorrente" && tipo !== "Aula recorrente") {
          const futureClasses = await Class.find({
            aluno: classToUpdate.aluno,
            tipo: "Aula recorrente",
            start: { $gt: classToUpdate.start },
          });

          await Class.deleteMany({
            _id: { $in: futureClasses.map(futureClass => futureClass._id) },
          });
        }

        if (title) classToUpdate.title = title;
        if (aluno) classToUpdate.aluno = aluno;
        if (tipo) classToUpdate.tipo = tipo;
        if (sobre) classToUpdate.sobre = sobre;
        if (assunto) classToUpdate.assunto = assunto;
        if (status) classToUpdate.status = status;
        if (start) classToUpdate.start = start;
        if (end) classToUpdate.end = end;

        await classToUpdate.save();

        return res.json({ classToUpdate });
      } else {
        return res.status(404).json({ message: "Aula não encontrada" });
      }
    } catch (err) {
      return next(err);
    }
  },

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

  async getSixMonths(req, res, next) {
    try {
      const currentDate = new Date();
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 6);

      const allClasses = await Class.find({
        $or: [
          { start: { $gte: currentDate.toISOString().split("T")[0] } }, // Aulas futuras
          {
            start: {
              $gte: threeMonthsAgo.toISOString().split("T")[0],
              $lte: currentDate.toISOString().split("T")[0],
            },
          },
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
