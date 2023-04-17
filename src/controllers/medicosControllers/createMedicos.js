const Medicos = require("../../models/medicosModel");

async function createMedicos(request, response) {
  try {
    const dataMedicos = {
      nome_completo: request.body.nome_completo,
      genero: request.body.genero,
      data_de_nascimento: request.body.data_de_nascimento,
      cpf: request.body.cpf,
      telefone: request.body.telefone,
      instituicao_de_ensino_da_formacao:
        request.body.instituicao_de_ensino_da_formacao,
      cadastro_do_CRM_UF: request.body.cadastro_do_CRM_UF,
      especializacao_clinica: request.body.especializacao_clinica,
      estado_no_sistema: request.body.estado_no_sistema,
      total_de_atendimentos_realizados:
        request.body.total_de_atendimentos_realizados,
    };
    const medicoExist = await Medicos.findOne({
      where: { cpf: dataMedicos.cpf },
    });
    if (medicoExist) {
      return response.status(409).json({ message: "Medico ja cadastrado" });
    }
    if (
      !dataMedicos.data_de_nascimento ||
      !dataMedicos.instituicao_de_ensino_da_formacao ||
      !dataMedicos.cadastro_do_CRM_UF ||
      !dataMedicos.especializacao_clinica
    ) {
      return response.status(400).json({
        message:
          "data de nascimento, instituição de ensino da formação, cadastro do CRM/UF e especialização clinica são OBRIGATORIOS!",
      });
    }
    const medicos = await Medicos.create(dataMedicos)
     response.status(201).json(medicos);
  } catch(error) {
    return response
      .status(500)
      .json({ message: "não foi possivel processar sua solicitação" });
  }
}

module.exports = createMedicos;
