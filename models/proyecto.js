const { Schema, model } = require('mongoose')
const ProyectoSchema = Schema({
    id: {
        type: Number,
        required: [true, 'EL nombre es obligatoria!']
    },
    
    nombre: {
        type: String,
        required: [true, 'EL nombre es obligatoria!']
    },
    horasDedicadas: {
        type: Number,
        required: [true, 'La horas son obligatoria!']
    },
    valorProyecto: {
        type: Number,
        required: [true, 'el valor del proyecto es obligatoria!'],
        numeroIntegrantes: {
    type: Number,
        required: [true, 'el numero de integrantes es obligatoria!']
        }
    }
})
module.exports = model('Proyecto', ProyectoSchema)