const Doctor = require("../../models/doctorsModel");

async function findAllDoctor(request, response) {
  try {
    const filter = request.query;
    if (filter.status_in_the_system) {
      const status = filter.status_in_the_system.toUpperCase();
      if (!["ACTIVE", "INACTIVE"].includes(status)) {
        return response.status(400).json({
          message: "Status must be ACTIVE or INACTIVE",
        });
      }

      const doctors = await Doctor.findAll({
        where: {
          status_in_the_system: status,
        },
      });
      return response.status(200).json(doctors);
    }

    const doctors = await Doctor.findAll();
    return response.status(200).json(doctors);
  } catch (error) {
    console.log(error);
    return response.status(500).json({
      message: "We were unable to process your request",
    });
  }
}

module.exports = findAllDoctor;
