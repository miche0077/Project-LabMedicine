const Medico = require("../../models/medicosModel");

async function findAllMedicos(request, response) {
  try {
    const filtro = request.query;
    if (filtro.estado_no_sistema) {
      const estado = filtro.estado_no_sistema.toUpperCase();
      if (!["ATIVO", "INATIVO"].includes(estado)) {
        return response.status(400).json({
          message: "O status deve ser ATIVO ou INATIVO",
        });
      }

      const medicos = await Medico.findAll({
        where: {
          estado_no_sistema: estado,
        },
      });
      return response.status(200).json(medicos);
    }

    const medicos = await Medico.findAll();
    return response.status(200).json(medicos);
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      message: "Não foi possível processar a solicitação",
    });
  }
}

module.exports = findAllMedicos;
