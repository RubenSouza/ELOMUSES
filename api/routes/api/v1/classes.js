const router = require("express").Router();
const ClassController = require("../../../controllers/ClassController");
const adminValidation = require("../../../controllers/validations/adminValidation");
const auth = require("../../auth");
const ClassValidation = require("../../../controllers/validations/classValidation");
const { validate } = require("express-validation");

/* CLASS ROUTES */

router.post(
  "/register",
  auth.required,
  adminValidation.admin,
  validate(ClassValidation.register, {}, {}),
  ClassController.register
); // tested

router.get("/", auth.required, adminValidation.admin, ClassController.index); // tested

router.get(
  "/schedule",
  auth.required,
  adminValidation.admin,
  ClassController.getThreeMonths
); //tested

// router.get("/:id", auth.required, ClassController.show);

router.get("/aluno/:id", auth.required, ClassController.getByStudent);

// router.put(
//   "/:id",
//   auth.required,
//   validate(ClassValidation.update, {}, {}),
//   ClassController.update
// );

router.delete(
  "/:id",
  auth.required,
  adminValidation.admin,
  ClassController.deleteById
); //tested

module.exports = router;
