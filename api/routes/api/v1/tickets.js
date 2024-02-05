const router = require("express").Router();
const TicketController = require("../../../controllers/TicketController");
const adminValidation = require("../../../controllers/validations/adminValidation");
const auth = require("../../auth");

/* TICKET ROUTES */

router.post(
  "/register",
  auth.required,
  adminValidation.admin,
  TicketController.register
);

router.get("/", auth.required, adminValidation.admin, TicketController.index);

router.get("/:aluno", auth.required, TicketController.findByAluno);

router.get("/:id", auth.required, TicketController.show);

router.put(
  "/:id",
  auth.required,
  adminValidation.admin,
  TicketController.update
);

router.delete(
  "/:id",
  auth.required,
  adminValidation.admin,
  TicketController.delete
);

module.exports = router;
