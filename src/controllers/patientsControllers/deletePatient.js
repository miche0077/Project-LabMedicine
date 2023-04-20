const Patient = require("../../models/patientModel");

async function deletePatient(request, response) {
  const { id } = request.params;
  const foundPatient = await Patient.findByPk(id);
  try {
    if (!foundPatient) {
      return response
        .status(404)
        .json({ message: `patient ${id} not found` });
    }
    await foundPatient.destroy();
    return response
      .status(204)
      .json({ message: `patient number ${id} deleted!` });
  } catch (error) {
    response.status(500).json({ message: "Error" });
  }
}

module.exports = deletePatient;
