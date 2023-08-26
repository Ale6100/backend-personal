import __dirname from "../utils.js";
import { Response, Request } from "express";

const base = (_req: Request, res: Response) => { //  Muestra una pequeña presentación en la ruta "/"
    res.send({ status: "success", message: "Bienvenido, este es mi backend personal. No hay nada que ver en este endpoint" })
}

export default {
    base
}
