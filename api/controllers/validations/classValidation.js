const Joi = require("joi");

const ClassValidation = {
  register: {
    body: Joi.object({
      aluno: Joi.string().required(),
      title: Joi.string().required(),
      sobre: Joi.string().required(),
      tipo: Joi.string().required(),
      assunto: Joi.string().optional(),
      status: Joi.string().optional(),
      start: Joi.date().required(),
      end: Joi.date().required(),
    }),
  },
};

module.exports = ClassValidation;
