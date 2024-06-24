// const express = require('express')

// const mibdpv = require('../../bd/usuarios.json')

// const priviRouter = express.Router()

// //publico

// priviRouter.get('/publico',(req, resp) =>{
//     resp.send('endPoint Public')
// })

// //autenticado
// priviRouter.post('/autenticado',(req,resp) =>{
//     let username = req.body.username,
//         password = req.body.password

//     if(!username || !password) return resp.sendStatus(400)

//     let user = mibdpv.find(user => user.username === username)

//     if (!user) return resp.sendStatus(401)

//     if(user.password !== password) resp.sendStatus(401)

//     resp.send(`Usuario${user.name} autenticado`)
// })

// //autorizado 

// priviRouter.post('/autorizado',(req,resp) =>{

//     let username = req.body.username,
//     password = req.body.password,
//     role = req.body.role

//     if(!username || !password) return resp.sendStatus(400)

//     let user = mibdpv.find(user => user.username === username)

//     if (!user) return resp.sendStatus(401)

//     if(user.password !== password) resp.sendStatus(401)

//     if(user.role !== 'admin') return resp.sendStatus(403)

//     esp.send(`Usuario ${user.name} Administrador`)
// })

// module.exports = priviRouter