const express = require("express");
const router = express.Router();
const {userRegister,userLogin} = require("../controller/userControllers")
 router.use(express.json());
 router.use(express.urlencoded({extended:false}))


router.post("/register",userRegister);
router.post("/login",userLogin);



module.exports = router