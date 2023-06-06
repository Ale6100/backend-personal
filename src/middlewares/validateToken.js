import config from "../config/config.js"

const validateToken = (req, res, next) => {
    const { tokenGralB } = req.body
    const { tokenGralQ } = req.query
    
    if (tokenGralB === config.token.gral || tokenGralQ === config.token.gral || (req.url === "/" && req.method === "GET")) { // Para acceder a cualquier endpoint de cualquier método (con excepción del método GET en la página principal), vas a tener que pasar un token especial en el body o en los query parameters
        next()
    } else {
        req.logger.error(`${req.infoPeticion} | Credenciales inadecuadas. Debes enviar un token de acceso. Visita https://github.com/Ale6100/backend-personal.git#endpoints-%EF%B8%8F`)
        res.status(403).send({ status: "error", error: `Credenciales inadecuadas. Debes enviar un token de acceso. Visita https://github.com/Ale6100/backend-personal.git#endpoints-%EF%B8%8F` });
    }
}

export default validateToken
