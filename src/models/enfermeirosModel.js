const Sequelize= require("sequelize");
const conection = require("../database/index");

const Enfermeiro = conection.define("enfermeiros", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  nome_completo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  data_de_nascimento: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING(11),
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  instituicao_de_ensino_da_formacao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cadastro_do_COFEN_UF: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Enfermeiro;
