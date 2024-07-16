const express = require("express");
const router = express.Router();
const {userRegister,userLogin} = require("../controller/userControllers");
const servicesController = require("../controller/servicesController");
 router.use(express.json());
 router.use(express.urlencoded({extended:false}))


router.post("/register",userRegister);
router.post("/login",userLogin);
router.get("/service",servicesController);



module.exports = router