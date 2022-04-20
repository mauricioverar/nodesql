const express = require('express')
const app = express()

// variable de entorno para servidor(dotenv)
require('dotenv').config()

// variable de entorno para servidor(heroku)
const port = process.env.PORT || 3000 // esto lo lee heroku

// conexion db
const mongoose = require('mongoose');

// const usuario = "" // usuario ficticio
// const password = ""
// const dbName = ""
// -- OjO -- el app.js no se ve de forma publica, pero es recomendable no tener estos datos visibles, usar variables de entorno

// uri = mongodb+srv://<user>:<password>@cluster0.<cluster>.mongodb.net/<basedato>?retryWrites=true&w=majority

// const uri = `mongodb+srv://${usuario}:${password}@cluster0.wc2gl.mongodb.net/${dbName}?retryWrites=true&w=majority`
// en archivo .env (solucionar tema ip mongodb) heroku login git add. etc
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.wc2gl.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(uri);
  console.log('db ok')
}

//motor de plantillas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views') // vistas se guardarán acá

// middleware
app.use(express.static(__dirname + '/public')) // public se guardará en el hosting

// RutasWeb
app.use('/', require('./router/RutasWeb'))
app.use('/mascotas', require('./router/Mascotas'))

// Router
// app.get('/', (req, res) => {
//     // res.send('Hello World!, desde express v2')
//     res.render('index', {titulo: 'mi titulo dinamico'}) // va hacia index.ejs
// })

// // ruta pagina servicios
// app.get('/servicios', (req, res) => {
//     // res.send('pag servicios')
//     res.render('servicios', {tituloServicio: 'mi titulo dinamico de servicios'}) // va hacia index.ejs
// })

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