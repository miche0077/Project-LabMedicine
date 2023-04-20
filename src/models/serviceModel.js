const Sequelize = require("sequelize");
const conection = require("../database/index");
const Doctor = require("./doctorsModel");
const Patient = require("./patientModel");

const Atendimentos = conection.define("atendimento", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  doctor_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  patient_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

Atendimentos.belongsTo(Doctor);
Atendimentos.belongsTo(Patient);

module.exports = Atendimentos;
