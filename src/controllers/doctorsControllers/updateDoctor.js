const Doctor = require("../../models/doctorsModel");

async function updateDoctor(request, response) {
  try {
    const { id } = request.params;
    const {
      full_name,
      gender,
      date_of_birth,
      cpf,
      phone_number,
      institution_of_teach_training,
      register_to_CRM_UF,
      clinical_specialization,
    } = request.body;
    const foundDoctor = await Doctor.findByPk(id);
    if (!foundDoctor) {
      return response.status(404).json({
        error: `Doctor number: ${id} not found.`,
      });
    } else if (
      !institution_of_teach_training ||
      !date_of_birth ||
      !register_to_CRM_UF ||
      !clinical_specialization
    ) {
      return response.status(400).json({
        error:
          "Check, training educational institution, date of birth, CRM/UF register, and clinical specialization are mandatory!",
      });
    }

    foundDoctor.set({
      full_name,
      gender,
      date_of_birth,
      cpf,
      phone_number,
      institution_of_teach_training,
      register_to_CRM_UF,
      clinical_specialization,
    });
    await foundDoctor.save();
    response.status(200).json(foundDoctor);
  } catch (error) {
    return response
      .status(500)
      .json({ message: "We were unable to process your request" });
  }
}

module.exports = updateDoctor;
