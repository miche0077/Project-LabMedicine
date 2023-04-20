const Nurse = require("../../models/nurseModel");

async function listNurseId(request, response) {
  try {
    const { id } = request.params;
    const foundNurse = await Nurse.findByPk(id);
    if (!foundNurse) {
      return response.status(404).json({
        error: `Nurse number ${id} not found.`,
      });
    }

    return response.status(200).json(foundNurse);
  } catch (error) {
    return response
      .status(500)
      .json({ message: "We were unable to process your request" });
  }
}

module.exports = listNurseId;
