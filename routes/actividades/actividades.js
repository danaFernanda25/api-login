const express = require('express')
const bd = require('../../bd')

const actiRouter = express.Router()


actiRouter.get('/actividades', async (req, resp) => {
    try {
        const query = `
            SELECT a.id_actividad, 
                    a.fecha, 
                    a.agua, 
                    a.huevos, 
                    a.alimento, 
                    v.vacuna, 
                    l.nro_lote AS numero_lote,
                    u.nombres AS nombre_usuario,
                    u.apellidos AS apellido_usuario
            FROM actividades a
            INNER JOIN lotes l ON a.id_lote = l.id_lotes
            INNER JOIN usuario u ON a.id_usuario = u.id_usuario
            LEFT JOIN vacunas v ON a.id_vacuna = v.id_vacuna
        `;
        const [rows, fields] = await bd.query(query);
        const respuestas = rows.map(row => {
            return {
                ...row,
                agua: row.agua || 'No',
                alimento: row.alimento || 'No',
                huevos: row.huevos || 'No',
                vacuna: row.vacuna || 'No'
            };
        });
        resp.json(respuestas);
    } catch (error) {
        console.error(error);
        resp.status(500).send('Error al obtener las actividades');
    }   
});

actiRouter.get('/vacunas', async (req, resp) => {
    try {
        const [rows] = await bd.query('SELECT id_vacuna, vacuna FROM vacunas');
        resp.json(rows);
    } catch (error) {
        console.error('Error al obtener los tipos de vacunas:', error);
        resp.status(500).json({ error: 'Error al obtener los tipos de vacunas' });
    }
});

actiRouter.get('/lotes', async (req, resp) => {
    try {
        const [rows] = await bd.query('SELECT id_lotes, nro_lote FROM lotes');
        resp.json(rows);
    } catch (error) {
        console.error('Error al obtener los numero de lote:', error);
        resp.status(500).json({ error: 'Error al obtener los numeros de lote' });
    }
});

actiRouter.get('/usuario', async (req, resp) => {
    try {
        const [rows] = await bd.query('SELECT id_usuario, nombres, apellidos FROM usuario');
        resp.json(rows);
    } catch (error) {
        console.error('Error al obtener usuario:', error);
        resp.status(500).json({ error: 'Error al obtener usuario' });
    }
});

actiRouter.post('/actividades', async (req,resp) =>{
    try {
        let fecha = req.body.fecha,
            lote = req.body.id_lote,
            usuario = req.body.id_usuario,
            agua = req.body.agua,
            huevos = req.body.huevos,
            alimento = req.body.alimento,
            vacuna = req.body.id_vacuna

        let id_lote = lote,
            id_usuario = usuario,
            id_vacuna = vacuna
            

            console.log(fecha, id_lote, id_usuario, id_vacuna, agua, huevos, alimento, )
        if (!fecha || !id_lote || !id_usuario) {
            return resp.status(400).send("Los campos fecha, lote y usuario son obligatorios.");
        }

        if (agua === undefined && huevos === undefined && alimento === undefined && id_vacuna === undefined) {
            return resp.status(400).send("Debe ingresar al menos uno de los siguientes campos: agua, huevos, alimento o vacuna");
        }
            


        

                // Ejecutar la consulta SQL para insertar la nueva actividad
                const query = `
                    INSERT INTO actividades (fecha, id_lote, id_usuario, agua, huevos, alimento, id_vacuna)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                `;
                const [result] = await bd.query(query, [fecha, id_lote, id_usuario, agua, huevos, alimento, id_vacuna]);
                // const [result] = await bd.query(query, [fecha, lote, usuario, agua || null, huevos || null, alimento || null, vacuna || null]);
                // Devolver una respuesta con el ID de la nueva actividad insertada
                resp.status(201).json({ id_actividad: result.insertId });
            } catch (error) {
                // Capturar y manejar cualquier error que ocurra durante la inserción
                console.error('Error al agregar la actividad:', error.message);
                resp.status(500).send('Error al agregar la actividad');
            }
})


module.exports = actiRouter