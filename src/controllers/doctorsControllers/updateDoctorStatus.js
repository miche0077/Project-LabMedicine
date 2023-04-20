const Doctor= require('../../models/doctorsModel');

async function updateDoctorStatus(request, response) {
    try {
      const { id } = request.params;
      const { status_in_the_system } = request.body;
      const statusFound = await Doctor.findByPk(id);
      if (!statusFound) {
        return response
          .status(404)
          .json({ message: "Doctor not found check code" });
      }
      if (status_in_the_system === "") {
        return response.status(400).json({ message: "Required field" });
      }
      statusFound.set({
        status_in_the_system
      });
      await statusFound.save();
      response.status(200).json(statusFound);
    } catch {
      return response
        .status(500)
        .json({ message: "We were unable to process your request" });
    }
  }
  
  module.exports = updateDoctorStatus;