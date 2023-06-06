import __dirname from "../utils.js";

const base = async (req, res) => { // Renderiza una pequeña presentación en la ruta "/"
    res.render("index")
}

export default {
    base
}
