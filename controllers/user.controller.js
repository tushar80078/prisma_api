const userService = require("../services/user.service");



/**
 * @description CREATE One User
 */

exports.postCreateUser=async(req,res,next)=>{
    
    try {
        const newUserResponse = await userService.createUser();

        return res.status(200).send({
            message:"User Created Successfully",
            response : newUserResponse
        })
    } catch (error) {
        return next(error);
    }

}


/**
 * @description CREATE Many User
 */

exports.postCreateManyUser=async(req,res,next)=>{
    
    try {
        const newUserResponse = await userService.createManyUser();

        return res.status(200).send({
            message:"Users Created Successfully",
            response : newUserResponse
        })
    } catch (error) {
        return next(error);
    }

}

/**
 * @description FIND One Unique User
 */

exports.getFindUserByEmailId=async(req,res,next)=>{
    
    try {
        const newUserResponse = await userService.findOneUser();

        return res.status(200).send({
            message:"Users Fetched Successfully",
            response : newUserResponse
        })
    } catch (error) {
        return next(error);
    }

}

/**
 * 
 */

exports.getFindManyUsers=async(req,res,next)=>{
    try {
        const newUserResponse = await userService.findManyUsers();

        return res.status(200).send({
            message:"Users Fetched Successfully",
            response: newUserResponse
        })

    } catch (error) {
        return next(error)
    }
}

exports.putUpdateUser=async(req,res,next)=>{
    try {
        const newUserResponse=await userService.updateUser();

        return res.status(200).send({
            message:"User Updated Successfully",
            reponse : newUserResponse
        })
    } catch (error) {
        return next(error)
    }
}