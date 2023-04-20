const express = require('express')
const router = express.Router()


const createPatient = require("../controllers/patientsControllers/createPatient");
const updatePatient = require("../controllers/patientsControllers/updatePatient");
const updateStatusService = require("../controllers/patientsControllers/updateStatusService");
const findAllPatients = require("../controllers/patientsControllers/findAllPatients");
const findPatientId = require("../controllers/patientsControllers/findPatientId");
const deletePatient = require("../controllers/patientsControllers/deletePatient");

router.post("/api/patient", createPatient);
router.put("/api/patient/:id", updatePatient);
router.put("/api/patients/:id/service_status", updateStatusService);
router.get("/api/patients", findAllPatients);
router.get("/api/patients/:id", findPatientId);
router.delete("/api/patients/:id", deletePatient);

module.exports = router