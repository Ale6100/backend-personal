import __dirname from "../utils.js";
import sendMail from "../services/mailingService.js";

const send = async (req, res) => { // En /api/mail con el método POST, se envía un mail usando los datos pasados en el body
    const { from, to, subject, html } = req.body

    if (!from || !to || !subject || !html) {
        req.logger.error(`${req.infoPeticion} | Incomplete values`)
        return res.status(400).send({ status: "error", error: "Valores incompletos" })
    }

    const response = await sendMail({
        from,
        to,
        subject,
        html,
    })

    if (response === "success") {
        res.status(200).send({ status: "success", message: "Enviado" })
    } else {
        req.logger.fatal(`${req.infoPeticion} | ${response}`)
        res.status(500).send({ status: "error", error: response })
    }
}

export default {
    send
}
