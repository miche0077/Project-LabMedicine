const Nurse = require("../../models/nurseModel");

async function updateNurse(request, response) {
  try {
    const { id } = request.params;
    const {
      full_name,
      gender,
      date_of_birth,
      cpf,
      phone_number,
      institution_of_teach_training,
      register_of_COFEN_UF,
    } = request.body;
    const foundNurse = await Nurse.findByPk(id);
    if (!foundNurse) {
      return response.status(404).json({
        error: `Nurse number: ${id} is not found.`,
      });
    } else if (
      !date_of_birth ||
      !register_of_COFEN_UF ||
      !institution_of_teach_training
    ) {
      return response.status(400).json({
        error:
          "Verify, institution of teach training, date of birth, register to COFEN/UF are mandatory!",
      });
    }

    foundNurse.set({
      full_name,
      gender,
      date_of_birth,
      cpf,
      phone_number,
      institution_of_teach_training,
      register_of_COFEN_UF,
    });

    await foundNurse.save();
    response
      .status(200)
      .json({ message: `Nurse number ${id} update with sucess`, foundNurse });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "We were unable to process your request" });
  }
}

module.exports = updateNurse;
