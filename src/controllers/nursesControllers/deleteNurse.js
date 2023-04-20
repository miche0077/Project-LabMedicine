const Nurse = require("../../models/nurseModel");

async function deleteNurse(request, response) {
  const { id } = request.params;
  const foundNurse = await Nurse.findByPk(id);
  try {
    if (!foundNurse) {
      return response
        .status(404)
        .json({ message: `Nurse number ${id} does not exist` });
    }
    await foundNurse.destroy();
    return response
      .status(204)
      .json({ message: `Nurse number ${id} is deleted!` });
  } catch (error) {
    response.status(500).json({ message: "Error" });
  }
}

module.exports = deleteNurse;
