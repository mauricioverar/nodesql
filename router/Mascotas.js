const express = require('express')
const router = express.Router()

// ruta pagina mascotas
router.get('/', (req, res) => {
    res.render('mascotas', {
        arrayMascotas: [
            {
                id: 'mi',
                nombre: 'rex',
                descripcion: 'rex desc'
            },
            {
                id: 'mo',
                nombre: 'fox',
                descripcion: 'fox desc'
            }
        ]
    })
})

module.exports = router