const Atendimentos = require('../../models/serviceModel')
const Doctor = require('../../models/doctorsModel')
const Patient = require('../../models/patientModel')

async function createServices(request, response){
    try {
        const { doctor_id, patient_id } = request.body
        
        if(!doctor_id || !patient_id) {
            return response.status(400).json({message: 'Doctor and patient ids are required'})
        }
        
        const doctor = await Doctor.findByPk(doctor_id)
        const patient = await Patient.findByPk(patient_id)
    
        if(!doctor || !patient) {
            return response.status(404).json({message: 'Doctor or Patient not found'})
        }
    
        const data = {
            doctor_id,
            patient_id
        }
    
        const atendimentos = await Atendimentos.create(data)
    
        // Increment the number of services performed by the doctor
        await doctor.increment('total_atendimentos')
    
        // Increment the number of services received by the patient and update their status to 'ATTENDED'
        await patient.update({ total_atendimentos: patient.total_atendimentos + 1, service_status: 'ATTENDED' })
    
        response.status(200).json({
            doctor,
            patient,
            atendimentos
        })
    
    } catch (error) {
        console.log(error)
        return response.status(500).json({message: 'We were unable to process your request'})
    }
}

module.exports = createServices
