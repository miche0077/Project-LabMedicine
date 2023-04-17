const Medico = require("../../models/medicosModel");

async function findIdMedico(request, response) {
  try {
    const { id } = request.params;
    const foundMedico = await Medico.findByPk(id);
    if (!foundMedico) {
      return response.status(404).json({
        error: `Medico numero: ${id} não encontrado.`,
      });
    }

    return response.status(200).json(foundMedico);
  } catch (error) {
    return response
      .status(500)
      .json({ message: "não foi possivel processar sua solicitação" });
  }
}

module.exports = findIdMedico;
