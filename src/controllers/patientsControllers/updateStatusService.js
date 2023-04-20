const Patient = require("../../models/patientModel");

async function updateStatusService(request, response) {
  try {
    const { id } = request.params;
    const { service_status } = request.body;
    const statusFound = await Patient.findByPk(id);
    if (!statusFound) {
      return response
        .status(404)
        .json({ message: "Patient not found check code" });
    }
    if (service_status === "") {
      return response.status(400).json({ message: "Required field" });
    }
    statusFound.set({
      service_status
    });
    await statusFound.save();
    response.status(200).json(statusFound);
  } catch {
    return response
      .status(500)
      .json({ message: "We were unable to process your request" });
  }
}

module.exports = updateStatusService;
