const Enfermeiro = require("../../models/enfermeirosModel");

async function updateEnfermeiro(request, response) {
  try {
    const { id } = request.params;
    const {
      nome_completo,
      genero,
      data_de_nascimento,
      cpf,
      telefone,
      instituicao_de_ensino_da_formacao,
      cadastro_do_COFEN_UF,
      
    } = request.body;
    const encontrarEnfermeiro = await Enfermeiro.findByPk(id);
    if (!encontrarEnfermeiro) {
      return response.status(404).json({
        error: `Enfermeiro numero: ${id} não encontrado.`,
      });
    } else if (
      !updateEnfermeiro.data_de_nascimento ||
      !updateEnfermeiro.cadastro_do_COFEN_UF ||
      !updateEnfermeiro.instituicao_de_ensino_da_formacao
    ) {
      return response.status(400).json({
        error:
          "Verifique, instituição de ensino da formação, data de nascimento, cadastro do COFEN/UF são obrigatorios!",
      });
    }

    enfermeiroAtualizado.set({
      nome_completo: updateEnfermeiro.nome_completo,
      genero: updateEnfermeiro.genero,
      data_de_nascimento: updateEnfermeiro.data_de_nascimento,
      cpf: updateEnfermeiro.cpf,
      telefone: updateEnfermeiro.telefone,
      instituicao_de_ensino_da_formacao:
        updateEnfermeiro.instituicao_de_ensino_da_formacao,
      cadastro_do_COFEN_UF: updateEnfermeiro.cadastro_do_COFEN_UF
    });
    await enfermeiroAtualizado.save();
    response.status(200).json({message:`enfermeiro numero ${id} atualizado com sucesso`, enfermeiroAtualizado});
  } catch (error) {
    return response
      .status(500)
      .json({ message: "não foi possivel processar sua solicitação" });
  }
}

module.exports = updateEnfermeiro;
