const express=require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/createUser",userController.postCreateUser);

router.post("/createManyUser",userController.postCreateManyUser);

router.get("/getUserById",userController.getFindUserByEmailId);

router.get("/getAllUsers",userController.getFindManyUsers);

router.put("/updateUser",userController.putUpdateUser);

module.exports=router