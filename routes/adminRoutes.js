const express=require('express');
const authMiddlewares = require('../middlewares/authMiddlewares');
const { getAllUsersController, getAllDoctorsController,changeAccountStatusController } = require('../controllers/adminCtrl');
const router=express.Router();

//GET Method || USERS

router.get('/getAllUsers',authMiddlewares,getAllUsersController)

//GET Method ||Doctors

router.get('/getAllDoctors',authMiddlewares,getAllDoctorsController)

//POst account status

router.post("/changeAccountStatus",authMiddlewares,changeAccountStatusController)



module.exports=router;