const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/files", require("./files"));
router.use("/classes", require("./classes"));

module.exports = router;
