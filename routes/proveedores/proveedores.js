// const express = require('express') 
// const mibdpr = require('../../bd/proveedores.json')
// const fs = require('fs')
// //id
// //nombre
// //correo
// //direccion
// //contacto
// //estado

// const proveedoresRouter = express.Router()

// //middlewares a Proveedores



// //endPoints a proveedores
// proveedoresRouter.get('/', (req,resp)=>{
//     //logica para consultar a todos los proveedores^
//     const proveedores = mibdpr

//     return resp.send(proveedores) 
// })

// proveedoresRouter.post('/', (req, resp) => {
    
//     let id = req.body.id,
//         nombre = req.body.nombre,
//         correo = req.body.correo,
//         direccion = req.body.direccion,
//         contacto = req.body.contacto,
//         estado = req.body.estado

    
//     if(!id || !nombre) resp.status(400).send
    
//     const proveedores = mibdpr.find((proveedores) => proveedores.id === id)
//     if(proveedores) return resp.status(409).send()

//     mibdpr.push({
//         id, nombre, correo, direccion, contacto, estado
//     })

//     let datos = JSON.stringify(mibdpr)
//     try{
//         fs.writeFileSync('/proveedores.json', datos)
//     } catch(error){
//         console.log(error)
//     }

//     return resp.send(mibdpr)

// })

// proveedoresRouter.patch('/:id', (req, resp) => { 
    
//     let id = req.params.id,
//     nombre = req.body.nombre,
//     correo = req.body.correo,
//     direccion = req.body.direccion,
//     contacto = req.body.contacto,
//     estado = req.body.estado

//     if(!nombre && !correo && !direccion && !contacto && !estado) return resp.status(400).send()

//     const proveedores = mibdpr.find((proveedores) => proveedores.id === id)
//     if(!proveedores) return resp.status(404).send()
    
//     proveedores.nombre = nombre,
//     proveedores.correo = correo,
//     proveedores.direccion = direccion,
//     proveedores.contacto = contacto,
//     proveedores.estado = estado
    
//     let datos = JSON.stringify(mibdpr)
//     try{
//         fs.writeFileSync('../../bd/proveedores.json', datos)
//     } catch(error){
//         console.log(error)
//     }
//     return resp.send(mibdpr)
// })   

// module.exports = proveedoresRouter