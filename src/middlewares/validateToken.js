import config from "../config/config.js"

const validateToken = (req, res, next) => {
    const fronts = [config.site.urlfrontend1, config.site.urlfrontend2, config.site.urlfrontend3]

    if (fronts.some(front => req.headers.origin?.includes(front))) { // Entra en este if si hacemos la petición desde el frontend. Gracias al módulo cors sé que las peticiones desde el cliente siempre van a tener el origin
        const token = req.headers.authorization?.split(" ")[1]; // Token enviado en el encabezado de la petición

        if (token === config.token.gral) return next() // Permitimos el acceso del cliente sólo si en los encabezados coloca el token de acceso, utilizando el esquema de autenticación Bearer

        req.logger.error(`${req.infoPeticion} | Forbidden | Token de acceso inválido. Visita https://github.com/Ale6100/backend-personal.git#endpoints-%EF%B8%8F`)
        return res.status(403).send({ status: "error", "error": 'Forbidden | Token de acceso inválido. Visita https://github.com/Ale6100/backend-personal.git#endpoints-%EF%B8%8F' })    
    }

    return next() 
}

export default validateToken
