const Nurse = require("../../models/nurseModel");

async function createNurse(request, response) {
  try {
    const {
      full_name,
      gender,
      date_of_birth,
      cpf,
      phone_number,
      institution_of_teach_training,
      register_of_COFEN_UF,
    } = request.body;
    const nurseExist = await Nurse.findOne({
      where: { cpf },
    });
    if (nurseExist) {
      return response.status(409).json({ message: "nurse already registered" });
    }
    if (cpf.length !== 11) {
      return response
        .status(400)
        .json({ message: "The CPF must have 11 digits" });
    }
    if (
      !date_of_birth||
      !institution_of_teach_training ||
      !register_of_COFEN_UF
    ) {
      return response.status(400).json({
        message:
          "Date of birth, institution of teach training and register of COFEN/UF are mandatory!",
      });
    }
    const newNurse = await Nurse.create({
      full_name,
      gender,
      date_of_birth,
      cpf,
      phone_number,
      institution_of_teach_training,
      register_of_COFEN_UF,
    });
    response.status(201).json(newNurse);
  } catch (error) {
    return response
      .status(500)
      .json({ message: "We were unable to process your request" });
  }
}

module.exports = createNurse;
