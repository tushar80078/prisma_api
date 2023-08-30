const {PrismaClient} =require("@prisma/client")
const prisma=new PrismaClient()


/**
 * @description CREATe Only One User
 */

const createUser = async()=>{

    const response = prisma.user.create({
        data:{
            name:"Vedant",
            email :"vedant1@gmail.com",
            age:22,
            userPreference:{
                create: {
                    emailUpdates : true,
                }
            }
        },
        // include:{
        //    userPreference: true
        // },

        // At a time we only use include or select statement

        select:{
            name: true,
            userPreference: {select:{id:true}}
        }
    })
    return response;
}

/**
 * @description CREATe Many Users
 * Need to pass array of data to create many fieldsd at a time  
 */

const createManyUser = async()=>{
    await prisma.user.deleteMany();

    const response = prisma.user.createMany({
        data:[{
            name:"Kyle",
            email :"tusharbhosale2281@gmail.com",
            age:27
        },{
                name:"Ravi",
                email :"Ravi@gmail.com",
                age:23
            }
            ],
        // We can't create other reference fields while creating createMany users. Such that here we can't create userPreference field   
        // WE can't use selct and include state while adding multiple records at a time

       
    })
    return response;
}


/**
 * @description FIND Uniqe User
 * Before using findUnique make sure that, that field is already declared with @unique tag
 * 
 */

const findOneUser = async()=>{

    /*
        //Using find Unique
        const response = prisma.user.findUnique({
            where:{
                // email :"tusharbhosale2281@gmail.com"

                //If we have to find multiple unique records then use this way

                age_name:{
                    age: 27,
                    name:"Kyle"
                }
            }
            //We can use include and select here also
        })
        return response;

    */


        
    //Using find first -> When we have to find only one record from entire table then use findFirst.
    //It dosent require the @unique declartion for fields
        
        const response = prisma.user.findFirst({
            where:{
            
            name:"Kyle"
            }
            //We can use include and select here also
        })
        return response;
    

}


/**
 * @description FINDMANY Used to find number of records on the basis of some condition
 */
const findManyUsers =async ()=>{

    const response = await prisma.user.findMany({
        where:{

            /*
            ---> And OR NOT
            AND:[
                {
                    email:"tusharbhosale2281@gmail.com",
                    age:{
                        gt:20
                    }
                }
            ]
            
            ---> endsWith - startWith
            email:{
                endsWith:"@gmail.com",
            }


            ---> contains used to check the availaibility of text
            email:{
                contains:"@gmail.com"
            }

            ---> gt - greater than lt- less than. gte - greater than equal to. lte - less than equal to
            age :{gt:20}

            ---> notIn is used to skip those records by provided condition
            name:{
                notIn:["Vedant","Shraddha"]
            }

            ---> In is used to give multiple conditions to show items. This conditions gives an array
            name:{
             in:["Vedant","Shraddha"]
            }
           
            ---> Not used to skip that things
            name:{
                not:"Vedant"
            },

            ---> Equals used to set the condition
            name:{
                equals:"Vedant"
            }

            */


            //---------> For relational finding data

            // userPreference:{
            //     emailUpdates:true
            // }


        },

        //--------->
        //Order by used to get our data in desc or asc order
        // orderBy:{
        //     age:"desc"
        // },

        //--------->
        //Used to find in database have unique name
        //distinct:["name","age"]--> here if whatever condition will match that conditions record will be shown

        //--------->
        //For pagination -- take parameter takes provided number of contents
        // take: 1,

        //---------->
        //To skip some record --> This will skip only first record
        //skip: 1,


    })

    return response;
}


/**
 * @description UPDATE 
 */

const updateUser = async() =>{
    // const response = await prisma.user.update(
    //     {
    //         where:{
    //             email : "tusharbhosale2281@gmail.com"
    //         },
    //         data :{
    //             email : "tusharbhosale@gmail.com"
    //         },
    //         //here we can also use include and where
    //     }

    // )

    // return response;

    // const reponse = await prisma.user.updateMany(
    //     {
    //         where :{
    //             name:"Vedants Data"
    //         },
    //         data:{
    //             name:"Vedants"
    //         }
    //     }//This only returns the count of updated records
    // )

    // return reponse

    
}


module.exports={
    createUser,
    createManyUser,
    findOneUser,
    findManyUsers,
    updateUser
}