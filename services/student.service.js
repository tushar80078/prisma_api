const {PrismaClient} =require("@prisma/client")
const prisma=new PrismaClient()

const createStudent=async(studentData)=>{
   
        const {name,lastName} = studentData;
        const response = await prisma.student_Info.create({
            data:{
                name:name,
                lastName:lastName
            } 
        })
        return response;
  
}

const deleteStudentById=async(studentId)=>{
   
        const id = studentId;
        

        const resposne = await prisma.student_Info.delete({
            where:{id:id}
        })

        return resposne;
}

const getAllStudents=async()=>{
    const response = await prisma.student_Info.findMany();

    return response;
}

const getStudentById=async(studentId)=>{
    
    const response = await prisma.student_Info.findMany({
        where:{
            id:studentId
        }
    })

    return response;
}

const updateStudentById=async(studentData)=>{
    const {studentId} = studentData;

    const response = await prisma.student_Info.update({
        where:{id:studentId},
        data:studentData.data
    })

    return response;
}

module.exports={
    createStudent,
    deleteStudentById,
    getAllStudents,
    getStudentById,
    updateStudentById
}

