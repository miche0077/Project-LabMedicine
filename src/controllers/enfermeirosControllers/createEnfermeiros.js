const Enfermeiros = require("../../models/enfermeirosModel");

async function createEnfermeiros(request, response) {
  try {
    const {
      nome_completo,
      genero,
      data_de_nascimento,
      cpf,
      telefone,
      instituicao_de_ensino_da_formacao,
      cadastro_do_COFEN_UF,
    } = request.body;
    const enfermeiroExiste = await Enfermeiros.findOne({
      where: { cpf },
    });
    if (enfermeiroExiste) {
      return response.status(409).json({ message: "Enfermeiro já cadastrado" });
    }
    if (cpf.length !== 11) {
      return response
        .status(400)
        .json({ message: "O CPF deve ter 11 dígitos!" });
    }
    if (
      !data_de_nascimento ||
      !instituicao_de_ensino_da_formacao ||
      !cadastro_do_COFEN_UF
    ) {
      return response.status(400).json({
        message:
          "Data de nascimento, instituição de ensino da formação e cadastro do COFEN/UF são obrigatórios!",
      });
    }
    const novoEnfermeiro = await Enfermeiros.create(request.body);
    response.status(201).json(novoEnfermeiro);
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Não foi possível processar sua solicitação" });
  }
}

module.exports = createEnfermeiros;
