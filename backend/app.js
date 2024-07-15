const express = require("express");
const app = express();
const userRouter = require("./routers/userRoute")
const cors = require("cors");
require("./db/conn")


let corsOptions = {
    origin: 'http://localhost:3000',
    methods: "GET, POST, PUT, DELETE, PATCH, HEAF",
    Credentials: true
    // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions))
app.use("/api/user",userRouter)





app.listen(8000,()=>{
    console.log("server success fully run")
})