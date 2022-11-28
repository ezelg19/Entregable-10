const { Router } = require('express')
const mensajes = require('../class/mensajes.js')
const authors = require('../class/authors.js')

const router = Router()

router.post('/',async(req,res)=>{
    fecha = new Date().toLocaleDateString()
    hora = new Date().toLocaleTimeString()
    const mensaje = req.body.mensaje
    const comentario = {
        hora: hora,
        fecha: fecha,
        mensaje: mensaje
    }
    const author = await authors.getBySid(req.sessionID)
    await mensajes.save({ author: author[0], mensaje: comentario })
    res.redirect('./')
})


module.exports = router
