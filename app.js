const express = require('express')
const app = express()
// variable de entorno para servidor(heroku)
const port = process.env.PORT || 3000

//motor de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views') // vistas se guardarán acá

// middleware
app.use(express.static(__dirname + '/public')) // public se guardará en el hosting

// Router
app.get('/', (req, res) => {
    // res.send('Hello World!, desde express v2')
    res.render('index', {titulo: 'mi titulo dinamico'}) // va hacia index.ejs

})

// ruta pagina servicios
app.get('/servicios', (req, res) => {
    // res.send('pag servicios')
    res.render('servicios', {tituloServicio: 'mi titulo dinamico de servicios'}) // va hacia index.ejs


})

app.listen(port, () => {
    console.log(`servidor app listening on port ${port}`)
})

// middleware
app.use((req, res, next) => {
    // res.status(404).sendFile(__dirname + '/public/404.html')
    res.status(404).render('404', {
        titulo: '404',
        descripcion: 'Titulo del sitio'
    })

})