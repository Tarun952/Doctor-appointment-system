const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailablityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");

const authMiddleware=require("../middlewares/authMiddlewares");
const authMiddlewares = require("../middlewares/authMiddlewares");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//Auth || POST
router.post('/getUserData',authMiddleware,authController);

//apply-doctor|| POST
router.post('/apply-doctor',authMiddleware,applyDoctorController);

//apply-notification|| POST
router.post('/get-all-notification',authMiddleware,getAllNotificationController);

// delete notification
router.post('/delete-all-notification',authMiddleware,deleteAllNotificationController);

//GET all doc

router.get('/getAllDoctors',authMiddleware,getAllDoctorsController);

//Book Appointment
router.post('/book-appointment',authMiddleware,bookAppointmentController);


//Booking availablity
router.post('/booking-availablity',authMiddleware,bookingAvailablityController);


//Appointment List
router.get('/user-appointments',authMiddleware,userAppointmentsController);


module.exports = router;
