const router = require("express").Router();

router.use("/users", require("./users"));
router.use("/files", require("./files"));

module.exports = router;
