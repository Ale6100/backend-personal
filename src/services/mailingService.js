import nodemailer from "nodemailer"
import config from "../config/config.js";

const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: config.nodemailer.user,
        pass: config.nodemailer.pass
    }
})

const sendMail = async (objConf) => { // Envía un mail según los datos que vengan como argumento
    const { from, to, subject, html, attachments } = objConf
    
    try {
        await transport.sendMail({
            from: `<${from}>`, // El from debe ser quien envía el mail, aunque realmente esto es simbólico porque quien envía el mail realmente es el definido en config.nodemailer.user. Por esta razón recomiendo colocar el email de envío dentro del propio html o en el subject de la petición | El < > es opcional
            to: to, // Mail de destino | También se puede configurar para que envíe a varios mails, si el "to" fuera un arreglo de mails
            subject: subject, // Asunto
            html: html, // HTML del cuerpo del mail
            attachments: attachments // Archivos adjuntos
        })
        return "success"
    } catch (error) {
        return error
    }
}

export default sendMail
