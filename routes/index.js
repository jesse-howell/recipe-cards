const router = require("express").Router();
const apiRoutes = require("./api");
// js was missing - trying to test
const viewRoutes = require("./viewRoutes");

router.use("/", viewRoutes);
router.use("/api", apiRoutes);

module.exports = router;
