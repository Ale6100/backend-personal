import dotenv from "dotenv"

dotenv.config(); // Copia todas las igualdades que estén en el archivo ".env" y las convierte a propiedades del process.env (es decir, inicializa todas las variables de entorno que defina allí)

// Por seguridad al archivo .env no lo dejo como público, puedes hacerte el tuyo a la altura de la carpeta src

export default { // Exporto un objeto que incluye de manera ordenada las variables de entorno recién mencionadas
    nodemailer: {
        user: process.env.NODEMAILER_USER, // Gmail configurado en Nodemailer que se usa para enviar los mails
        pass: process.env.NODEMAILER_PASS // Contraseña que te proporciona nodemailer
    },
    
    site: {
        urlfrontend: process.env.URL_FRONTEND // Sitio donde está ubicado nuestro frontend
    },

    token: {
        gral: process.env.TOKEN_GRAL // Token arbitrario personal, necesario para acceder a los endpoints
    }
}
