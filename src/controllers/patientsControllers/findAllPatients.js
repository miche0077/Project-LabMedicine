const Patient = require("../../models/patientModel");

async function findAllPatients(request, response) {
  try {
    const filter = request.params;
    if (filter.service_status) {
      if (
        ![
          "WAITING_FOR_SERVICE",
          "IN_SERVICE",
          "ATTENDED",
          "NOT_ATTENDED"
        ].includes(filter.service_status)
      ) {
        return response.status(400).json({
          message:
            "the state should be WAITING_FOR_SERVICE, IN_SERVICE, ATTENDED, NOT_ATTENDED",
        });
      }

      const patients = await Patient.findAll({
        where: {
          service_status: filter.service_status,
        },
      });
      return response.json(patients);
    } else {
      const patients = await Patient.findAll();
      return response.json(patients);
    }
  } catch (error) {
    return response.status(500).json({ message: "Unable to process request" });
  }
}
module.exports = findAllPatients;
