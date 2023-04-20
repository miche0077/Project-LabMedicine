const Sequelize = require("sequelize");
const conection = require("../database/index");

const Patient = conection.define("patient", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  full_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
  },
  date_of_birth: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  phone_number: {
    type: Sequelize.STRING,
  },
  emergency_contact: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  list_of_alergies: {
    type: Sequelize.STRING,
    defaultValue: "none",
  },
  list_of_specific_care: {
    type: Sequelize.STRING,
    defaultValue:"none",
  },
  health_insurance: {
    type: Sequelize.STRING,
    defaultValue: "none",
  },
  service_status: {
    type: Sequelize.ENUM(
      "WAITING_FOR_SERVICE",
      "IN_SERVICE",
      "ATTENDED",
      "NOT_ATTENDED"
    ),
  },
  total_atendimentos: {
    type: Sequelize.INTEGER,
    defautValue: 0,
  },
});
module.exports = Patient;
