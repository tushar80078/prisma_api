const express = require("express");
const router = express.Router();

//Import all routes from other routes file ------------------------------>

const studentRoutes = require("../routes/student.routes");
const userRoutes = require("../routes/userRoutes.routes")

router.use("/student",studentRoutes);

router.use("/user",userRoutes);


module.exports = router;
