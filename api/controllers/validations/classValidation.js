const Joi = require("joi");

const ClassValidation = {
  register: {
    body: Joi.object({
      aluno: Joi.string().required(),
      title: Joi.string().required(),
      sobre: Joi.string().required(),
      tipo: Joi.string().required(),
      assunto: Joi.string().allow("").optional(),
      status: Joi.string().required(),
      start: Joi.date().required(),
      end: Joi.date().required(),
      renewalDate: Joi.string().allow(null).optional(),
    }),
  },
  update: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
  },
};

module.exports = ClassValidation;
