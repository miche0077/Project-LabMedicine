const Patient = require("../../models/patientModel");

async function updatePatient(request, response) {
  try {
    const { id } = request.params;
    const {
      full_name,
      gender,
      date_of_birth,
      cpf,
      phone_number,
      emergency_contact,
      list_of_alergies,
      list_of_specific_care,
      health_insurance,
    } = request.body;

    const foundPatient = await Patient.findByPk(id);
    if (!foundPatient) {
      return response.status(404).json({
        error: `Patient number: ${id} not found.`,
      });
    } else if (!date_of_birth || !emergency_contact) {
      return response
        .status(400)
        .json({
          error: "Verify, date of birth, and emergency contact are required!",
        });
    }

    foundPatient.set({
      full_name,
      gender,
      date_of_birth,
      cpf,
      phone_number,
      emergency_contact,
      list_of_alergies,
      list_of_specific_care,
      health_insurance,
    });
    await foundPatient.save();
    response.status(200).json(foundPatient);
  } catch (error) {
    return response
      .status(500)
      .json({ message: "We were unable to process your request" });
  }
}

module.exports = updatePatient;
