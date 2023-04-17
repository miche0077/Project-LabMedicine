const Medico = require("../../models/medicosModel");

async function deleteMedico(request, response) {
  const { id } = request.params;
  const foundPaciente = await Medico.findByPk(id);
  try {
    if (!foundPaciente) {
      return response
        .status(404)
        .json({ message: `Medico numero ${id} não existe` });
    }
    await foundPaciente.destroy();
    return response
      .status(204)
      .json({ message: `Paciente numero ${id} deletado!` });
  } catch (error) {
    response.status(500).json({ message: "Error" });
  }
}

module.exports = deleteMedico;
