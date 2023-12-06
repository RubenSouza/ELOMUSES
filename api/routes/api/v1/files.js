const router = require("express").Router();
const FileController = require("../../../controllers/FileController");
const adminValidation = require("../../../controllers/validations/adminValidation");
const auth = require("../../auth");

// const {validate} = require('express-validation')

router.get("/", auth.required, FileController.index);
router.get("/:id", auth.required, FileController.show);

router.post("/", auth.required, adminValidation.admin, FileController.register);

router.put("/:id", auth.required, adminValidation.admin, FileController.update);

router.delete(
  "/:id",
  auth.required,
  adminValidation.admin,
  FileController.delete
);

module.exports = router;
