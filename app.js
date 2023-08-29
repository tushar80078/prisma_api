const express=require("express");
const app=express();
const cors=require("cors");
const errorMiddleware = require("./helper/middlewares/errorMiddlewares")
const routes = require("./routes/allRoutes.routes");
app.use(express.json());
app.use(cors());


//All Parent Routes

app.use("/",routes);

//Usage Of Error Middleware
app.use(errorMiddleware);

module.exports=app;


