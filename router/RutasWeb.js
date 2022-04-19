const express = require('express')
const router = express.Router()

// Router
router.get('/', (req, res) => {
    // res.send('Hello World!, desde express v2')
    res.render('index', {titulo: 'mi titulo dinamico'}) // va hacia index.ejs
})

// ruta pagina servicios
router.get('/servicios', (req, res) => {
    // res.send('pag servicios')
    res.render('servicios', {tituloServicio: 'mi titulo dinamico de servicios'}) // va hacia index.ejs
})

module.exports = router