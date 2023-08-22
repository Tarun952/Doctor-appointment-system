const express=require('express');
const authMiddlewares = require('../middlewares/authMiddlewares');
const { getDoctorInfoController, updateProfileController, getDoctorByIdController, doctorAppointmentsController, updateStatusController } = require('../controllers/doctorCtrl');
const router=express.Router();

//POST Single DOC INFO
router.post('/getDoctorInfo',authMiddlewares,getDoctorInfoController);

//POST Update Profile
router.post('/updateProfile',authMiddlewares,updateProfileController);

//post get single doc
router.post('/getDoctorById',authMiddlewares,getDoctorByIdController);

//GET appointments
router.get('/doctor-appointments',authMiddlewares,doctorAppointmentsController);

//post update status
router.post('/update-status',authMiddlewares,updateStatusController)

module.exports=router;