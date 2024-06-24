const express = require('express')
const cors = require('cors')

// const routerProductos = require('./productos/productos')
// const routerUsuarios = require('./usuarios/usuarios')
// const routerProveedores = require('./proveedores/proveedores')
// const routerPrivilegios = require('./privilegios/privilegios')

const routerActividades = require('./actividades/actividades')

const rutas = express.Router()

//const fs = require('fs') // IMPORTANTE

//middlewares de express
rutas.use(express.json()) 
rutas.use(express.text()) 
rutas.use(cors())

//middlewares de aplicacion
// rutas.use('/productos', routerProductos)
// rutas.use('/usuarios', routerUsuarios)
// rutas.use('/proveedores', routerProveedores)
// rutas.use('/', routerPrivilegios)

rutas.use('/', routerActividades)

module.exports = rutas