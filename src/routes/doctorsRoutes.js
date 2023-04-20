const express = require('express')
const router = express.Router()

const createDoctors = require("../controllers/doctorsControllers/createDoctors");
const updateDoctor = require("../controllers/doctorsControllers/updateDoctor");
const updateDoctorStatus = require("../controllers/doctorsControllers/updateDoctorStatus");
const findAllDoctors= require("../controllers/doctorsControllers/findAllDoctors");
const findDoctorId = require("../controllers/doctorsControllers/findDoctorId");
const deleteDoctor = require("../controllers/doctorsControllers/deleteDoctor");


router.post("/api/doctors", createDoctors);
router.put("/api/doctors/:id", updateDoctor);
router.put("/api/doctors/:id/status_in_the_system", updateDoctorStatus);
router.get("/api/doctors", findAllDoctors);
router.get("/api/doctors/:id", findDoctorId);
router.delete("/api/doctors/:id", deleteDoctor);

module.exports = router