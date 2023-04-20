const Doctor = require("../../models/doctorsModel");

async function deleteDoctor(request, response) {
  const { id } = request.params;
  const foundDoctor = await Doctor.findByPk(id);
  try {
    if (!foundDoctor) {
      return response
        .status(404)
        .json({ message: `Doctor number ${id} not found` });
    }
    await foundDoctor.destroy();
    return response
      .status(204)
      .json({ message: `Doctor Number ${id} is deleted!` });
  } catch (error) {
    response.status(500).json({ message: "Error" });
  }
}

module.exports = deleteDoctor;
