import express from "express";
import __dirname from "./utils.js";
import cors from "cors"
import corsOptions from "./middlewares/cors.js";
import addLogger from "./middlewares/addLogger.js";
import validateToken from "./middlewares/validateToken.js";
import config from "./config/config.js";
import logger from "./utils/logger.js";
import baseRouter from "./routes/base.routes.js"
import mailRouter from "./routes/mail.routes.js"
import http from "http";

const app = express();

const PORT = process.env.PORT || 8080; // Elige el puerto 8080 en caso de que no venga definido uno por defecto como variable de entorno

const server: http.Server = app.listen(PORT, () => { // Escuchamos en el puerto cada vez que se reconozca un nuevo proceso worker. Todos los procesos se comparten el mismo puerto
    const address = server.address();

    if (typeof address === "object" && address !== null) {
        logger.info(`Servidor escuchando en el puerto ${address.port}`);
    }
}); 
server.on("error", error => logger.fatal(`${error}`))

app.set("views", `${__dirname}/views`); // Ubicación de las vistas
app.set("view engine", "ejs"); // Configuramos EJS como el motor de visualización de nuestra app

app.use(express.json()); // Especifica que podemos recibir json
app.use(express.urlencoded({ extended: true })); // Habilita poder procesar y parsear datos más complejos en la url

app.use(express.static(__dirname + "/public")); // Quiero que mi servicio de archivos estáticos se mantenga en public

const whitelist = [] // Habilito los frontend que no vengan como string vacío
if (config.site.urlfrontend1) whitelist.push(config.site.urlfrontend1)
if (config.site.urlfrontend2) whitelist.push(config.site.urlfrontend2)
if (config.site.urlfrontend3) whitelist.push(config.site.urlfrontend3)

if (whitelist.length === 0) {
    logger.fatal("Debes colocar al menos una url frontend en las variables de entorno! Visita https://github.com/Ale6100/Curso-backend#despliegue-")
    // throw new Error(`Debes colocar al menos una url frontend en las variables de entorno! Visita https://github.com/Ale6100/Curso-backend#despliegue-`) 
}

app.use(cors(corsOptions(whitelist)))

app.use(addLogger)
app.use(validateToken)

app.use("/", baseRouter)
app.use("/api/mail", mailRouter)
