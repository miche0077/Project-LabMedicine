const Sequelize = require("sequelize");
const conection = require("../database/index");

const Paciente = conection.define("paciente", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome_completo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genero: {
    type: Sequelize.STRING,
  },
  data_nascimento: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
  },
  contato_de_emergencia: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lista_alergias: {
    type: Sequelize.STRING,
    defaultValue: "nenhum",
  },
  lista_de_cuidados_especificos: {
    type: Sequelize.STRING,
    defaultValue:"nenhum",
  },
  convenio: {
    type: Sequelize.STRING,
    defaultValue: "nenhum",
  },
  status_de_atendimento: {
    type: Sequelize.ENUM(
      "AGUARDANDO_ATENDIMENTO",
      "EM_ATENDIMENTO",
      "ATENDIDO",
      "NAO_ATENDIDO"
    ),
  },
  total_de_atendimentos_realizados: {
    type: Sequelize.INTEGER,
    defautValue: 0,
  },
});
module.exports = Paciente;
