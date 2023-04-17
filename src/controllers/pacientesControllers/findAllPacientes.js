const Paciente = require("../../models/pacientesModel");

async function findAllPacientes(request, response) {
  try {
    const filtro = request.query;
    if (filtro.status_de_atendimento) {
      if (
        ![
          "AGUARDADO_ATENDIMENTO",
          "EM_ATENDIMENTO",
          "ATENDIDO",
          "NAO_ATENDIDO".includes(filtro.status_de_atendimento),
        ]
      ) {
        return response.json({
          menssage:
            "O status deve ser AGUARDANDO_ATENDIMENTO, EM_ATENDIMENTO, ATENDIDO, NAO_ATENDIDO",
        });
      }

      const pacientes = await Paciente.findAll({
        where: {
          status_de_atendimento: filtro.status_de_atendimento,
        },
      });
      response.json(pacientes);
    } else {
      const pacientes = await Paciente.findAll();
      response.json(pacientes);
    }
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Não possivel processar a solicitacao" });
  }
}
module.exports = findAllPacientes;
