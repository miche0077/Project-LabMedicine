const Doctor = require("../../models/doctorsModel");

async function findDoctorId(request, response) {
  try {
    const { id } = request.params;
    const foundDoctor = await Doctor.findByPk(id);
    if (!foundDoctor) {
      return response.status(404).json({
        error: `Doctor number: ${id} not found.`,
      });
    }

    return response.status(200).json(foundDoctor);
  } catch (error) {
    return response
      .status(500)
      .json({ message: "We were unable to process your request" });
  }
}

module.exports = findDoctorId;
