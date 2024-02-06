const router = require("express").Router();
const TicketController = require("../../../controllers/TicketController");
const adminValidation = require("../../../controllers/validations/adminValidation");
const auth = require("../../auth");

/* TICKET ROUTES */

router.post("/register", TicketController.register);

router.get("/", auth.required, adminValidation.admin, TicketController.index);

router.get("/pending", auth.required, TicketController.indexPending);

router.get("/confirmed", auth.required, TicketController.indexConfirmed);

router.get("/cancelled", auth.required, TicketController.indexCancelled);

router.get(
  "/cancelled/total",
  auth.required,
  TicketController.totalCancelledTickets
);

router.get(
  "/confirmed/total",
  auth.required,
  TicketController.totalConfirmedTickets
);

router.get(
  "/pending/total",
  auth.required,
  TicketController.totalPendingTickets
);

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
