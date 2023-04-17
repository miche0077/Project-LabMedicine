const Paciente = require("../../models/pacientesModel");

async function createPaciente(request, response) {
  try {
    const dataPaciente = {
      nome_completo: request.body.nome_completo,
      genero: request.body.genero,
      data_nascimento: request.body.data_nascimento,
      cpf: request.body.cpf,
      telefone: request.body.telefone,
      contato_de_emergencia: request.body.contato_de_emergencia,
      lista_alergias: request.body.lista_alergia,
      lista_de_cuidados_especificos: request.body.lista_de_cuidados_especificos,
      convenio: request.body.convenio,
      status_de_atendimento: request.body.status_de_atendimento,
      total_de_atendimentos_realizados: request.body.total_de_atendimentos_realizados,
    };
    const pacienteExist = await Paciente.findOne({
      where: { cpf: request.body.cpf },
    });

    if (pacienteExist) {
      return response.status(409).json({ message: "Paciente ja cadastrado" });
    }

    if (
      !dataPaciente.contato_de_emergencia ||
      !dataPaciente.data_nascimento ||
      !dataPaciente.cpf
    ) {
      return response
        .status(400)
        .json({
          message:
            "contato de emergencia, data de nascimento, e CPF são OBRIGATORIOS!",
        });
    }

    const paciente = await Paciente.create(dataPaciente);
    response.status(201).json(paciente);
  } catch (error) {
    return response
      .status(500)
      .json({ message: "não foi possivel processar sua solicitação" });
  }
}
module.exports = createPaciente;
