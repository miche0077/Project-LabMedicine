const Medico = require('../../models/medicosModel');

async function updateStatusMedico(request, response) {
    try {
      const updateId = request.params.id;
      const updateEstado = {
        estado_no_sistema: request.body.estado_no_sistema,
      };
      const estadoFound = await Medico.findByPk(updateId);
      if (!estadoFound) {
        return response
          .status(404)
          .json({ message: "Medico não encontrado verifique o codigo" });
      }
      if (updateEstado.estado_no_sistema === "") {
        return response.status(400).json({ message: "Campo obrigatorio" });
      }
      estadoFound.set({
        estado_no_sistema: updateEstado.estado_no_sistema,
      });
      await estadoFound.save();
      response.status(200).json(estadoFound);
    } catch {
      return response
        .status(500)
        .json({ message: "não foi possivel processar sua solicitação" });
    }
  }
  
  module.exports = updateStatusMedico;