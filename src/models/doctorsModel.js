const { Sequelize } = require("sequelize");
const conection = require("../database/index");

const Doctor = conection.define("doctor", {
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
    allowNull: false,
  },
  phone_number: {
    type: Sequelize.STRING,
  },
  institution_of_teach_training: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  register_to_CRM_UF: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  clinical_specialization: {
    type: Sequelize.ENUM(
      "GENERAL_PRACTITIONER",
      "ANESTHESIA",
      "DERMATOLOGY",
      "GYNECOLOGY",
      "NEUROLOGY",
      "PEDIATRICS",
      "PSYCHIATRY",
      "ORTHOPEDICS"
    ),
  },
  status_in_the_system: {
    type: Sequelize.ENUM("ACTIVE", "INACTIVE"),
    defaultValue: "ACTIVE",
  },
  total_atendimentos: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Doctor;