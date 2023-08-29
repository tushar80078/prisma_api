require('dotenv').config();

//--- Import From Another File ---
const config=require("./helper/config/config");
const app =  require("./app");

//--- Define Constants ---


//--- API URL ---
app.listen(config.PORT,(err)=>{
   if(!err)
   {
        console.log(`Server Started On Port : ${config.PORT}`)
   }else{
        console.log(`Error While Starting Server. Error : ${err}`)
   }
})