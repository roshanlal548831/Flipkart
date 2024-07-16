const servicesModel = require("../models/servicesModel")

const servicesController = async(req,res) =>{
       try {
        const serviceData = await servicesModel.find()
        res.status(201).json({data: serviceData})
       } catch (error) {
        console.log("serves error => ",error)
       }
};


module.exports = servicesController