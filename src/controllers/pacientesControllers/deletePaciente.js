const Paciente = require("../../models/pacientesModel");

async function deletePaciente(request, response) {
  const foundId = request.params.id;
  const foundPaciente = await Paciente.findByPk(foundId);
  try {
    if (!foundPaciente) {
      return response
        .status(404)
        .json({ message: `Paciente numero ${foundId} não existe` });
    }
    await foundPaciente.destroy();
    return response
      .status(204)
      .json({ message: `Paciente numero ${foundId} deletado!` });
  } catch (error) {
    response.status(500).json({ message: "Error" });
  }
}

module.exports = deletePaciente;
