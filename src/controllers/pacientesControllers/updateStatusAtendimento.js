const Paciente = require("../../models/pacientesModel");

async function updateStatusAtendimento(request, response) {
  try {
    const updateId = request.params.id;
    const updateStatus = {
      status_de_atendimento: request.body.status_de_atendimento,
    };
    const statusFound = await Paciente.findByPk(updateId);
    if (!statusFound) {
      return response
        .status(404)
        .json({ message: "Paciente não encontrado verifique o codigo" });
    }
    if (updateStatus.status_de_atendimento === "") {
      return response.status(400).json({ message: "Campo obrigatorio" });
    }
    statusFound.set({
      status_de_atendimento: updateStatus.status_de_atendimento,
    });
    await statusFound.save();
    response.status(200).json(statusFound);
  } catch {
    return response
      .status(500)
      .json({ message: "não foi possivel processar sua solicitação" });
  }
}

module.exports = updateStatusAtendimento;
