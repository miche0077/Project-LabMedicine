const express = require('express');
const router = express.Router()

const createNurses = require("../controllers/nursesControllers/createNurses");
const updateNurses = require("../controllers/nursesControllers/updateNurses");
const listNurses = require("../controllers/nursesControllers/listNurses");
const listNurseId = require("../controllers/nursesControllers/listNurseId");
const deleteNurse= require("../controllers/nursesControllers/deleteNurse");

router.post("/api/nurses", createNurses);
router.put("/api/nurses/:id", updateNurses);
router.get("/api/nurses", listNurses);
router.get("/api/nurses/:id", listNurseId);
router.delete("/api/nurses/:id", deleteNurse);

module.exports = router