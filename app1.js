/*
const {frutas, dinero} = require('./frutas') // destructuring

frutas.forEach(item => {
  // console.log(item)
  console.count(item)
})
console.log(dinero)
*/
// node app.js ó node app



/*
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Holaaa amigos. I'm a moooodule",
    e : "oO",
    T : "U "
}));
*/

const http = require('http') // 
const server = http.createServer((req, res) => {
  res.end('respondiendo v3')
})  // requerimiento, respuesta

const puerto = 3000
server.listen(puerto, () => {
  console.log('escuchando')
})