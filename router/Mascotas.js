const express = require('express')
const router = express.Router()

// Model
const Mascota = require('../models/mascota')

// ruta pagina mascotas
router.get('/', async (req, res) => {

    try {

        const arrayMascotasDB = await Mascota.find()
        // mongoose buscara la coleccion mascota y traera todos sus documentos
        console.log(arrayMascotasDB) // en terminal vsc

        res.render('mascotas', {
            arrayMascotas: arrayMascotasDB
            // arrayMascotas: [
            //     {
            //         id: 'mi',
            //         nombre: 'rex',
            //         descripcion: 'rex desc'
            //     },
            //     {
            //         id: 'mo',
            //         nombre: 'fox',
            //         descripcion: 'fox desc'
            //     }
            // ]
        })
        
    } catch (error) {
        console.log(error)
    }
    
})

module.exports = router