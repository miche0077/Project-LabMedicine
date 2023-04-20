const Patient = require("../../models/patientModel");

async function findPatientId(request, response) {
  try {
    const { id } = request.params;
    const foundPatient = await Patient.findByPk(id);
    if (!foundPatient) {
      return response.status(404).json({
        error: `Patient number: ${id} not found.`,
      });
    }

    response.status(200).json(foundPatient);
  } catch (error) {
    return response
      .status(500)
      .json({ message: "We were unable to process your request" });
  }
}

module.exports = findPatientId;
