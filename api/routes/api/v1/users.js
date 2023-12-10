const router = require("express").Router();
const UserController = require("../../../controllers/UserController");
const adminValidation = require("../../../controllers/validations/adminValidation");
const auth = require("../../auth");

const { validate } = require("express-validation");

const UserValidation = require("../../../controllers/validations/userValidaton");

/* USER ROUTES */

router.post(
  "/login",
  validate(UserValidation.login, {}, {}),
  UserController.login
); //tested

router.put(
  "/update",
  auth.required,
  validate(UserValidation.updateAdmin, {}, {}),
  UserController.update
);

router.get("/", auth.required, UserController.index); //tested

/* ADMIN ROUTES */

router.post(
  "/admin/login",
  validate(UserValidation.login, {}, {}),
  UserController.adminLogin
);

router.get(
  "/admin",
  auth.required,
  adminValidation.admin,
  UserController.getPaginatedAdmin
); //tested

router.post(
  "/admin/register",
  auth.required,
  adminValidation.admin,
  validate(UserValidation.register, {}, {}),
  UserController.register
); //tested

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
  UserController.deleteAdmin
); //tested

router.get(
  "/admin/:id",
  auth.required,
  adminValidation.admin,
  UserController.show
); //tested

router.post(
  "/admin/verify-token",
  auth.required,
  adminValidation.admin,
  (req, res) => res.json({ success: true })
);

module.exports = router;
