const Joi = require("joi");

const UserValidation = {
  register: {
    body: Joi.object({
      responsible: Joi.string().required(),
      name: Joi.string().required(),
      username: Joi.string().required(),
      password: Joi.string().required(),
      email: Joi.string().required(),
      phone: Joi.string().required(),
      profession: Joi.string().optional(),
      RG: Joi.string().optional(),
      CPF: Joi.string().optional(),
      birthDate: Joi.string().optional(),
      status: Joi.string().optional(),
      isAdmin: Joi.boolean().optional(),
      contract: Joi.number().optional(),
      adress: Joi.string().optional(),
      number: Joi.string().optional(),
      complement: Joi.string().optional(),
      zipCode: Joi.string().optional(),
      city: Joi.string().optional(),
      neighborhood: Joi.string().optional(),
      state: Joi.string().optional(),
      profilePic: Joi.string().optional(),
    }),
  },

  update: {
    body: Joi.object({
      name: Joi.string().optional(),
      username: Joi.string().optional(),
      email: Joi.string().optional(),
      password: Joi.string().optional(),
    }),
  },

  updateAdmin: {
    body: Joi.object({
      name: Joi.string().optional(),
      username: Joi.string().optional(),
      email: Joi.string().optional(),
      password: Joi.string().optional(),
      phone: Joi.string().optional(),
      profilePic: Joi.string().optional(),
      isAdmin: Joi.boolean().optional(),
      contract: Joi.number().optional(),
      status: Joi.string().optional(),
    }),
  },

  login: {
    body: Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  },
};

module.exports = UserValidation;
