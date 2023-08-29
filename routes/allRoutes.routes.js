const express = require("express");
const router = express.Router();

//Import all routes from other routes file ------------------------------>

const studentRoutes = require("../routes/student.routes");


router.use("/student",studentRoutes);

module.exports = router;
