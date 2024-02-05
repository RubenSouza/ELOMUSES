const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/files", require("./files"));
router.use("/classes", require("./classes"));
router.use("/tickets", require("./tickets"));

module.exports = router;
