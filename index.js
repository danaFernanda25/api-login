
console.clear()

const PUERTO = 3000
const path = require('path')
const express = require('express') 
const expressApp = express() 

const cors = require('cors')


const rutasApp = require('./routes/adminRoutes')

expressApp.use('/home', express.static('public'))

expressApp.use('/', rutasApp)



expressApp.listen(PUERTO, () =>{
    console.log(`Servidor listo en el puerto ${PUERTO}`)
})



