const { Sequelize } = require("sequelize");
const conection = require("../database/index");

const Medico = conection.define("medico", {
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
  data_de_nascimento: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.STRING,
  },
  instituicao_de_ensino_da_formacao: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cadastro_do_CRM_UF: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  especializacao_clinica: {
    type: Sequelize.ENUM(
      "CLINICO_GERAL",
      "ANESTESISTA",
      "DERMATOLOGIA",
      "GINECOLOGIA",
      "NEUROLOGIA",
      "PEDIATRIA",
      "PSIQUIATRIA",
      "ORTOPEDIA"
    ),
  },
  estado_no_sistema: {
    type: Sequelize.ENUM("ATIVO", "INATIVO"),
    defaultValue: "ATIVO",
  },
  total_de_atendimentos_realizados: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Medico;