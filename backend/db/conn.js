const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Flipkart")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("mongodb error")
})