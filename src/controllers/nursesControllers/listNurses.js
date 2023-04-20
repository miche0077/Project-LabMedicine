const Nurse = require('../../models/nurseModel')

async function listNurses(request, response) {
  try {
    const foundNurses = await Nurse.findAll();
    return response.status(200).json(foundNurses);
  } catch (error) {
    return response.status(500).json({
      message: "We were unable to process your request",
    });
  }
}

module.exports = listNurses;
