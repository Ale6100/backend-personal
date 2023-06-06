import config from "../config/config.js"

const validateToken = (req, res, next) => {
    const { tokenGralB } = req.body
    const { tokenGralQ } = req.query
    
    if (tokenGralB === config.token.gral || tokenGralQ === config.token.gral) { // Para acceder a cualquier endpoint de cualquier método, vas a tener que pasar un token especial en el body o en los query parameters
        next()
    } else {
        req.logger.error(`${req.infoPeticion} | Credenciales inadecuadas. Debes enviar un token de acceso. Visita https://github.com/Ale6100/backend-personal.git#endpoints-`)
        res.status(403).send({ status: "error", error: `Credenciales inadecuadas. Debes enviar un token de acceso. Visita https://github.com/Ale6100/backend-personal.git#endpoints-` });
    }
}

export default validateToken
