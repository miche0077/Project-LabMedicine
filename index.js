require("dotenv").config();
const express = require("express");

const createPaciente = require("./src/controllers/pacientesControllers/createPaciente");
const updatePaciente = require("./src/controllers/pacientesControllers/updatePaciente");
const findAllPacientes = require("./src/controllers/pacientesControllers/findAllPacientes");
const updateStatusAtendimento = require("./src/controllers/pacientesControllers/updateStatusAtendimento");
const findPacienteId = require("./src/controllers/pacientesControllers/findPacienteId");
const deletePaciente = require("./src/controllers/pacientesControllers/deletePaciente");

const conection = require("./src/database/index");

const createMedicos = require("./src/controllers/medicosControllers/createMedicos");
const updateMedico = require("./src/controllers/medicosControllers/updateMedicos");
const updateStatusMedico = require("./src/controllers/medicosControllers/updateStatusMedico");
const findAllMedicos = require("./src/controllers/medicosControllers/findAllMedicos");
const findIdMedico = require("./src/controllers/medicosControllers/findIdMedico");
const deleteMedico = require("./src/controllers/medicosControllers/deleteMedico");
const createEnfermeiros = require("./src/controllers/enfermeirosControllers/createEnfermeiros");

const app = express();
app.use(express.json());

conection.sync({ alter: true });

app.post("/api/pacientes", createPaciente);
app.put("/api/paciente/:id", updatePaciente);
app.put("/api/pacientes/:id/status", updateStatusAtendimento);
app.get("/api/pacientes", findAllPacientes);
app.get("/api/pacientes/:id", findPacienteId);
app.delete("/api/pacientes/:id", deletePaciente);

app.post("/api/medicos", createMedicos);
app.put("/api/medicos/:id", updateMedico);
app.put("/api/medicos/:id/status", updateStatusMedico);
app.get("/api/medicos", findAllMedicos);
app.get("/api/medicos/:id", findIdMedico);
app.delete("/api/medicos/:id", deleteMedico);

app.post("/api/enfermeiros", createEnfermeiros)
app.listen(6666, () => {
  console.log("projeto online 123");
});

//update exemplo
/*if(!["teste 1", "teste_2", "teste_3"].includes(request.body.status)) {
            return response.status(400).response({message: ''})
        }*/
