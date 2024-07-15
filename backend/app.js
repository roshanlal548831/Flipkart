const express = require("express");
const app = express();
const userRouter = require("./routers/userRoute")
require("./db/conn")


app.use("/api",userRouter)





app.listen(8000,()=>{
    console.log("server success fully run")
})