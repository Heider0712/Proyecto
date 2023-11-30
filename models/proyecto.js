const { Schema, model } = require('mongoose')
const ProyectoSchema = Schema({
    id: {
        type: String,
        required: [true, 'EL nombre es obligatoria!']
    },
    
    nombre: {
        type: String,
        required: [true, 'EL nombre es obligatoria!']
    },
    horasDedicadas: {
        type: String,
        required: [true, 'La horas son obligatoria!']
    },
    valorProyecto: {
        type: String,
        required: [true, 'el valor del proyecto es obligatoria!'],
        numeroIntegrantes: {
            type: String,
            required: [true, 'el numero de integrantes es obligatoria!']
        }
    }
})
module.exports = model('Proyecto', ProyectoSchema)