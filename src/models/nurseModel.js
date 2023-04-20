const Sequelize= require("sequelize");
const conection = require("../database/index");

const Nurse = conection.define("nurse", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  full_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date_of_birth: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING(11),
    allowNull: false,
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  institution_of_teach_training: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  register_of_COFEN_UF: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Nurse;
