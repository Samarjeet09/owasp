import express from "express";
import {
  getAllDoctors,
  getUserDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister,
} from "../controller/userController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();


router.post("/signUp", patientRegister);
router.post("/signIn", login);
// router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
// router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);
// router.get("/doctors", getAllDoctors);
// router.get("/patient/me", isPatientAuthenticated, getUserDetails);
// router.get("/admin/me", isAdminAuthenticated, getUserDetails);
// router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
// router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

export default router;
