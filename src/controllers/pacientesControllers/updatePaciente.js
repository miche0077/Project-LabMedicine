const Paciente = require("../../models/pacientesModel");

async function updatePaciente(request, response) {
  try {
    const updateId = request.params.id;
    const updatePaciente = {
      nome_completo: request.body.nome_completo,
      genero: request.body.genero,
      data_nascimento: request.body.data_nascimento,
      cpf: request.body.cpf,
      telefone: request.body.telefone,
      contato_de_emergencia: request.body.contato_de_emergencia,
      lista_alergias: request.body.lista_alergias,
      lista_de_cuidados_especificos: request.body.lista_de_cuidados_especificos,
      convenio: request.body.convenio,
    };

    const foundPaciente = await Paciente.findByPk(updateId);
    if (!foundPaciente) {
      return response.status(404).json({
        error: `Paciente numero: ${updateId} não encontrado.`,
      });
    }
   else if (
      !updatePaciente.data_nascimento ||
      !updatePaciente.contato_de_emergencia
    ) {
      return response
        .status(400)
        .json({ error: "Verifique, data de nascimento, e contato de emergencia são obrigatorios!" });
    }

    foundPaciente.set({
      nome_completo: updatePaciente.nome_completo,
      genero: updatePaciente.genero,
      data_nascimento: updatePaciente.data_nascimento,
      cpf: updatePaciente.cpf,
      telefone: updatePaciente.telefone,
      contato_de_emergencia: updatePaciente.contato_de_emergencia,
      lista_alergias: updatePaciente.lista_alergias,
      lista_de_cuidados_especificos:
      updatePaciente.lista_de_cuidados_especificos,
      convenio: updatePaciente.convenio,
    });
    await foundPaciente.save();
    response.status(200).json(foundPaciente);
  } catch(error) {
    return response
      .status(500)
      .json({ message: "não foi possivel processar sua solicitação" });
  }
}

module.exports = updatePaciente;
