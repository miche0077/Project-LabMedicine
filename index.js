const express = require("express");

const conection = require("./src/database/index");

const app = express();
app.use(express.json());

conection.sync({ alter: true });
// Example routes
const patientRoutes = require("./src/routes/patientRoutes");
app.use(patientRoutes);

const doctorsRoutes = require("./src/routes/doctorsRoutes");
app.use(doctorsRoutes);

const nursesRoutes = require("./src/routes/nursesRoutes");
app.use(nursesRoutes);

const atendimento = require("./src/routes/servicesDoctors");
app.use(atendimento)

//numero de porta do servidor
app.listen(6666, () => {
  console.log("Server started on port 6666");
});
