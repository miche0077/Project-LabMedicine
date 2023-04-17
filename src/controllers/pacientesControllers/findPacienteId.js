const Paciente = require("../../models/pacientesModel");

async function findPacienteId(request, response) {
  try {
    const findId = request.params.id;
    const foundPaciente = await Paciente.findByPk(findId);
    if (!foundPaciente) {
      return response.status(404).json({
        error: `Paciente numero: ${findId} não encontrado.`,
      });
    }

    response.status(200).json(foundPaciente);
  } catch (error) {
    return response
      .status(500)
      .json({ message: "não foi possivel processar sua solicitação" });
  }
}

module.exports = findPacienteId;
