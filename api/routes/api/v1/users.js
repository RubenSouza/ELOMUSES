const router = require("express").Router();
const UserController = require("../../../controllers/UserController");
const adminValidation = require("../../../controllers/validations/adminValidation");
const auth = require("../../auth");

const { validate } = require("express-validation");

const userValidation = require("../../../controllers/validations/userValidation");
