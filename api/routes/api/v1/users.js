const router = require("express").Router();
const UserController = require("../../../controllers/UserController");
const adminValidation = require("../../../controllers/validations/adminValidation");
const auth = require("../../auth");

const { validate } = require("express-validation");

const UserValidation = require("../../../controllers/validations/userValidaton");

//client routes

router.post(
  "/login",
  validate(UserValidation.login, {}, {}),
  UserController.login
);

router.put(
  "/update",
  auth.required,
  validate(UserValidation.updateAdmin, {}, {}),
  UserController.update
);

router.get(
  "/",
  auth.required,
  validate(UserValidation.index, {}, {}),
  UserController.index
);

//admin routes

router.get(
  "/admin",
  auth.required,
  adminValidation.admin,
  UserController.getPaginatedAdmin
);

router.post(
  "/admin/register",
  auth.required,
  adminValidation.admin,
  validate(UserValidation.register, {}, {}),
  UserController.register
);

router.put(
  "/admin/:id",
  auth.required,
  adminValidation.admin,
  validate(UserValidation.updateAdmin, {}, {}),
  UserController.updateAdmin
);

router.delete(
  "/admin/:id",
  auth.required,
  adminValidation.admin,
  validate(UserValidation.index, {}, {}),
  UserController.delete
);

router.get(
  "/admin/:id",
  auth.required,
  adminValidation.admin,
  UserController.show
);

module.exports = router;
