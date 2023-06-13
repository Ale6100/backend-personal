import __dirname from "../utils.js";
import { Response, Request } from "express";

const base = (_req: Request, res: Response) => { //  Renderiza una pequeña presentación en la ruta "/"
    res.render("index")
}

export default {
    base
}
