



const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
// const adminController = require("../controllers/AdminController");
// const auth = require('../middleware/auth.js')

//USER 
router.post("/register",  userController.userRegister);
router.post("/login", userController.userLogin);
router.post('/sendMail', userController.forgotPasswordClient);
router.post('/updatePassword/:token', userController.resetPasswordClient);


//contact Us
router.post("/contactUs", userController.contactUs)
router.get('/getContactUs', userController.getContactUs)




// router.post("/verification/:userId", userController.emailVerification);
// router.post("/verification2", userController.emailVerification);
// router.post("/verifyOTP", userController.verifyOTP);
// router.post("/reset-password", userController.changePassword);

router.all('*/', function(req, res){
    return res.status(400).send({status:false, message:"Invalid Path"})
})

module.exports = router;