const Doctor = require("../../models/doctorsModel");

async function createDoctors(request, response) {
  try {
    const {
      full_name,
      gender,
      date_of_birth,
      cpf,
      phone_number,
      institution_of_teach_training,
      register_to_CRM_UF,
      clinical_specialization,
      status_in_the_system,
      total_atendimentos,
    } = request.body;
    const doctorExist = await Doctor.findOne({
      where: { cpf },
    });
    if (doctorExist) {
      return response
        .status(409)
        .json({ message: "Doctor already registered" });
    }
    if (
      !date_of_birth ||
      !institution_of_teach_training ||
      !register_to_CRM_UF ||
      !clinical_specialization
    ) {
      return response.status(400).json({
        message:
          "date of birth, institution of teach training, register to CRM/UF and clinical specialization are mandatory!",
      });
    }
    const doctors = await Doctor.create({
      full_name,
      gender,
      date_of_birth,
      cpf,
      phone_number,
      institution_of_teach_training,
      register_to_CRM_UF,
      clinical_specialization,
      status_in_the_system,
      total_atendimentos
  });
    response.status(201).json(doctors);
  } catch (error) {
    console.log(error)
    return response
      .status(500)
      .json({ message: "We were unable to process your request" });
  }
}

module.exports = createDoctors;
