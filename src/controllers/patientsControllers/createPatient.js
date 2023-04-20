const Patient = require("../../models/patientModel");

async function createPatient(request, response) {
  try {
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
      service_status,
      total_atendimentos,
    } = request.body;

    const patientExist = await Patient.findOne({
      where: { cpf },
    });

    if (patientExist) {
      return response
        .status(409)
        .json({ message: "Patient already registered" });
    }

    if (!emergency_contact || !date_of_birth || !cpf) {
      return response.status(400).json({
        message: "emergency contact, date of birth, and CPF are MANDATORY!",
      });
    }
    const validStatuses = [
      "WAITING_FOR_SERVICE",
      "IN_SERVICE",
      "ATTENDED",
      "NOT_ATTENDED",
    ];

    if (!validStatuses.includes(service_status)) {
      return response.status(400).json({
        message:
          "Service status should be one of WAITING_FOR_SERVICE, IN_SERVICE, ATTENDED, or NOT_ATTENDED",
      });
    }
    const patient = await Patient.create({
      full_name,
      gender,
      date_of_birth,
      cpf,
      phone_number,
      emergency_contact,
      list_of_alergies,
      list_of_specific_care,
      health_insurance,
      service_status,
      total_atendimentos
    });
    response.status(201).json(patient);
  } catch (error) {
    console.log(error)
    return response
      .status(500)
      .json({ message: "We were unable to process your request" });
  }
}
module.exports = createPatient;
