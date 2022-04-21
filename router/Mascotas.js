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
            listaMascotas: 'aqui van mascotas', // new
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

router.get('/crear', (req, res) => {
    res.render('crear')
})

// agregar mascota
router.post('/', async (req, res) => {
    const body = req.body
    // console.log(body) // bodyParser

    try {
        // const mascotaDB = new Mascota(body) // construye mascota con el modelo de este proy
        // await mascotaDB.save()
        // // console.log('mascota creada en servidor ' , mascotaDB) // resp de servidor en terminal

        await Mascota.create(body) // otro modo, metodo mas corto

        res.redirect('/mascotas')

    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async (req, res) => {

    const id = req.params.id // para leer id en url

    try {

        const mascotaDB = await Mascota.findOne({_id: id}) // _id se usa en mongoDB, acá indicamos a mongo q el _id es id
        console.log('mascota  en servidor ' , mascotaDB)

        res.render('detalle', {
            mascota: mascotaDB,
            error: false
        }) // mostrar en view detalle
        
    } catch (error) {
        console.log(error)

        res.render('detalle', {
            error: true,
            mensaje: 'no se encuentra id'
        })
        
    }
})

// eliminar
router.delete('/:id', async (req, res) => {

    const id = req.params.id // para leer id en url

    try {

        const mascotaDB = await Mascota.findByIdAndDelete({_id: id}) // _id se usa en mongoDB, acá indicamos a mongo q el _id es id
        // console.log('mascota  en servidor ' , mascotaDB)

        if (mascotaDB) {
            res.json({ // respuesta en json
                estado: true,
                mensaje: 'eliminado'
            })
        } else {
            res.json({
                estado: false,
                mensaje: 'no se puede eliminar'
            })
        }

        res.render('detalle', {
            mascota: mascotaDB,
            error: false
        }) // mostrar en view detalle
        
    } catch (error) {
        console.log(error)

        res.render('detalle', {
            error: true,
            mensaje: 'no se encuentra id'
        })
        
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id // para leer id en url
    const body = req.body
    try {
        const mascotaDB = await Mascota.findByIdAndUpdate(id, body, { useFindAndModify: false })
        console.log('mascota  en servidor ' , mascotaDB)

        res.json({
            estado: true,
            mensaje: 'edit'
        })
        
    } catch (error) {
        console.log(error)

        res.json({
            estado: false,
            mensaje: 'no se puede edit'
        })
        
    }
})

module.exports = router