const Medico = require("../../models/medicosModel");

async function updateMedico(request, response) {
  try {
    const medicoId = request.params.id;
    const updateMedico = {
      nome_completo: request.body.nome_completo,
      genero: request.body.genero,
      data_de_nascimento: request.body.data_de_nascimento,
      cpf: request.body.cpf,
      telefone: request.body.telefone,
      instituicao_de_ensino_da_formacao:
        request.body.instituicao_de_ensino_da_formacao,
      cadastro_do_CRM_UF: request.body.cadastro_do_CRM_UF,
      especializacao_clinica: request.body.especializacao_clinica,
    };
    const foundMedico = await Medico.findByPk(medicoId);
    if (!foundMedico) {
      return response.status(404).json({
        error: `Paciente numero: ${medicoId} não encontrado.`,
      });
    } else if (
      !updateMedico.instituicao_de_ensino_da_formacao ||
      !updateMedico.data_de_nascimento ||
      !updateMedico.cadastro_do_CRM_UF||
      !updateMedico.especializacao_clinica
    ) {
      return response
        .status(400)
        .json({
          error:
            "Verifique, instituição de ensino da formação, data de nascimento, cadastro do CRM/UF e especialização clinica são obrigatorios!",
        });
    }

    foundMedico.set({
      nome_completo: updateMedico.nome_completo,
      genero: updateMedico.genero,
      data_de_nascimento: updateMedico.data_de_nascimento,
      cpf: updateMedico.cpf,
      telefone: updateMedico.telefone,
      instituicao_de_ensino_da_formacao:
        updateMedico.instituicao_de_ensino_da_formacao,
      cadastro_do_CRM_UF: updateMedico.cadastro_do_CRM_UF,
      especializacao_clinica: updateMedico.especializacao_clinica,
    });
    await foundMedico.save();
    response.status(200).json(foundMedico);
  } catch (error) {
    return response
      .status(500)
      .json({ message: "não foi possivel processar sua solicitação" });
  }
}

module.exports = updateMedico