const studentServcie = require("../services/student.service")

/**
 * @description CREATE Student
 */

exports.postCreateStudent = async(req,res,next)=>{
    try{
        const {name,lastName}=req.body;

        const newStudentResponse = await studentServcie.createStudent({name,lastName});

        return res.status(200).send({
            message:"Studnent Created Successfully",
            response:newStudentResponse
        })

    }catch (error){
        return next(error);
    }
}

/**
 * @description DELETE Student By Id
 */

exports.deleteDeleteStudentById= async(req,res,next) => {
    try {
        const { id } = req.params;

       const studentId = parseInt(id, 10); // 10 specifies the base for parsing

        if (isNaN(studentId)) {
            return res.status(400).json({ message: "Invalid student ID" });
        }

        const newStudentResponse =await studentServcie.deleteStudentById(studentId);

        return res.status(200).send({
            message:"Student Deleted SuccessFully",
            response:newStudentResponse
        })

    } catch (error) {
        return next(error)
    }
}

/**
 * @description GET All Students
 */

exports.getGetAllStudents =async (req,res,next)=>{
    try {
        const newStudentResponse = await studentServcie.getAllStudents();

        return res.status(200).send({
            message: "Fetched Successfully",
            response : newStudentResponse
        })

    } catch (error) {
        return next(error);   
    }
}


/**
 * @description GET Student By Id
 */

exports.getGetStudentById=async (req,res,next) =>{
    try {

        const {id} = req.params;

        if(isNaN(id))
        {
           return res.status(400).send({
                message:"Invalid Student Id"
            })
        }

        const studentId = parseInt(id);

        const newStudentResponse = await studentServcie.getStudentById(studentId);

        if(newStudentResponse.length<=0)
        {
            return res.status(404).send(
                {
                    message:"Invalid Student Id"
                }
            )
        }

        return res.status(200).send({
            message:'Student Fetched Successfully',
            response : newStudentResponse
        })

    } catch (error) {
        return next(error)
    }
}


/**
 * @description UPDATE Student By Id
 */

exports.putUpdateStudentById=async(req,res,next)=>{
    try {
        const {id} = req.body;
    
        const data = req.body;

        if(isNaN(id))
        {
            return res.status(400).send({
                message:"Invalid Id"
            })
        }

        const studentId = parseInt(id);

        const newStudentResponse = await studentServcie.updateStudentById({studentId,data});

        if(newStudentResponse.length<=0)
        {
            return res.status(404).send({
                message:"Invalid Id"
            })
        }

        res.status(200).send({
            message:"Student Updated Successfully",
            response : newStudentResponse
        })

    } catch (error) {
        return next(error)
    }
}