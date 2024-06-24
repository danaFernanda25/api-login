// const express = require('express') 
// const mibd = require('../../bd/productos.json')

// const productoRouter = express.Router()

// //middlewares
// productoRouter.use('/:nombre',(req, resp, next)=>{
//     let texto = req.params.nombre
//     let consultar = mibd.find((usuario) => usuario.texto === texto) //nuevo
    
//     if(texto && /^[A-Z].*/.test(texto) || consultar){
//         next()
//     }else{
//         console.log('El nombre no existe en la bd')
//         resp.status(404)
//         resp.send('El nombre no existe en la bd')
//     }
// })


// ///fin middlewares

// productoRouter.get('/:nombre', (req, resp) => {

//     let nombre = req.params.nombre
//     const producto = mibd.find((producto) => producto.nombre === nombre)
    
//     if(!producto) return resp.status(404).send() 
//     return resp.send(producto) 

// })

// ///*** Para DATATABLES creamos un nuevo EndPoint para consultar todo nuestro JSON
// productoRouter.get('/', (req, resp) => {

//     const productos = mibd 

//     if(!productos) return resp.status(404).send()

//     return resp.send(productos) 
// })

// productoRouter.post('/', (req, resp) => {
    
//     let id = req.body.id,
//         nombre = req.body.nombre,
//         descripcion = req.body.descripcion,
//         precio = req.body.precio,
//         cantidad = req.body.cantidad

    
//     if(!id || !nombre) resp.status(400).send
    
//     const productos = mibd.find((productos) => productos.id === id)
//     if(productos) return resp.status(409).send()

//     mibd.push({
//         id, nombre, descripcion, precio, cantidad
//     })

//     let datos = JSON.stringify(mibd)
//     try{
//         fs.writeFileSync('./bd/productos.json', datos)
//     } catch(error){
//         console.log(error)
//     }

//     return resp.send(mibd)

// })

// productoRouter.patch('/:id', (req, resp) => { 
    
//     let id = req.params.id
    
//     let precio = req.body.precio
//     if(!precio) return resp.status(400).send() 

//     const producto = mibd.find((producto) => producto.id === id)
//     if(!producto) return resp.status(404).send() 
    
//     producto.precio = precio
    
//     let datos = JSON.stringify(mibd)
//     try{
//         fs.writeFileSync('./productos.json', datos)
//     } catch(error){
//         console.log(error)
//     }
//     return resp.send(mibd)
// })   

// productoRouter.delete('/:id', (req, resp) => { 
    
//     let id = req.params.id
    
//     const productoIndex = mibd.findIndex((producto) => producto.id === id)
    
//     if(productoIndex === -1) return resp.status(404).send()
//     mibd.splice(productoIndex, 1)
//     console.log(productoIndex) 
    
//     let datos = JSON.stringify(mibd)
//     try{
//         fs.writeFileSync('./productos.json', datos)
//     } catch(error){
//         console.log(error)
//     }
//     return resp.send(mibd) 
    
// })

// module.exports = productoRouter