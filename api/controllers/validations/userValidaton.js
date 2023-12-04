const Joi = require("joi");

const UserValidation = {
  index: {
    params: Joi.object({
      id: Joi.string().alphanum().required(),
    }),
  },

  register: {
    body: Joi.object({
      name: Joi.string().required(),
      username: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      phone: Joi.string().required(),
      profilePic: Joi.string().optional(),
      isAdmin: Joi.boolean().optional(),
      contract: Joi.number().optional(),
      status: Joi.string().optional(),
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
