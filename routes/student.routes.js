const express=require("express");
const router = express.Router();
const studentController=require("../controllers/student.controller");

router.post(`/createStudent`,studentController.postCreateStudent);

router.delete(`/deleteStudentById/:id`,studentController.deleteDeleteStudentById);

router.get(`/getAllStudents`,studentController.getGetAllStudents);

router.get(`/getStudentById/:id`,studentController.getGetStudentById);

router.put(`/updateStudentById`,studentController.putUpdateStudentById);

module.exports=router;