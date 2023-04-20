const Patient = require("../../models/patientModel");

async function deletePatient(request, response) {
  const { foundId } = request.params;
  const foundPatient = await Patient.findByPk(foundId);
  try {
    if (!foundPatient) {
      return response
        .status(404)
        .json({ message: `patient ${foundId} not found` });
    }
    await foundPatient.destroy();
    return response
      .status(204)
      .json({ message: `patient number ${foundId} deleted!` });
  } catch (error) {
    response.status(500).json({ message: "Error" });
  }
}

module.exports = deletePatient;
