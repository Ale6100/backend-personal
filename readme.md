# Backend personal

Bienvenido! En este nuevo repositorio encontrarás mi propio backend personalizado de acuerdo a mis necesidades, pero configurado de manera que pueda adaptarse fácilmente a otros proyectos.

La idea principal es crear un backend con una única página frontend. Este frontend no contendrá estilos ni lógica avanzada, ya que el objetivo del sitio es centrarse en los endpoints del backend.

Dado que el sitio está destinado _para uso personal_, no proporcionaré la url del mismo, pero si la consigues tampoco podrás utilizarlo ya que se requieren crenciales especiales para su funcionamiento.

## Endpoints 🕵️

Antes de presentar los endpoints disponibles, debes saber que para acceder a ellos debes enviar un token de acceso especial en el body con la propiedad `tokenGralB`, o en los query parameters con nombre `tokenGralQ` (donde te parezca más cómodo). El valor de dicho token debe coincidir con el valor definido en la variable de entorno `TOKEN_GRAL`.

1. En la ruta `/api/mail` con el método `POST`, puedes enviar un correo electrónico utilizando las propiedades de un objeto enviado en el cuerpo de la solicitud (body). Los propiedades son los siguientes:

    * `from`: El from debe ser quien envía el mail, aunque esto es simbólico porque quien envía el mail realmente es el colocado en la variable de entorno NODEMAILER_USER. Por esta razón recomiendo colocar el email de envío dentro del propio html o en el subject de la petición

    * `to`: Mail de destino

    * `subject`: Asunto

    * `html`: HTML del cuerpo del mail

    Recuerda convertir el objeto a formato JSON antes de enviarlo en el body.

Por ahora ese es el único endpoint accesible. En el futuro crearé más de acuerdo a mis necesidades.

## Descarga ⬇️

Si deseas obtener una copia local, descarga el archivo comprimido .zip desde el botón verde "code" o haz click [aquí](https://github.com/Ale6100/backend-personal/archive/refs/heads/main.zip)

Mira **Despliegue** para saber cómo desplegar el proyecto en tu computadora.

### Pre-requisitos 📋

Necesitas tener previamente descargado e instalado [NodeJs](https://nodejs.org/).

### Instalación 🔧

Instala las dependencias con el comando

```
npm install
```

Es necesario crear variables de entorno mediante la elaboración de un archivo .env en el mismo nivel que la carpeta src. Este archivo debe completarse con los siguientes campos, los cuales deben modificarse con tus propias credenciales en lugar del valor "X":

```env
NODEMAILER_USER = X # Gmail configurado en Nodemailer que se usa para enviar los mails
NODEMAILER_PASS = X # Contraseña que te proporciona nodemailer

URL_FRONTEND = X # URL de tu frontend sin barra lateral final

TOKEN_GRAL = X # Token arbitrario personal, necesario para acceder a los endpoints

```

## Despliegue 📦

Corre el proyecto con el comando

```
npm start
```

Una vez que veas el mensaje "Servidor escuchando en el puerto 8080" (puerto configurado por defecto), podrás comenzar a programar sin problemas.

## Construido con 🛠️

* JavaScript
* [NodeJs](https://nodejs.org/)
* [express](https://www.npmjs.com/package/express)
* [cors](https://www.npmjs.com/package/cors)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [ejs](https://www.npmjs.com/package/ejs)
* [nodemailer](https://www.npmjs.com/package/nodemailer)
* [winston](https://www.npmjs.com/package/winston)

## Autor ✒️

* **Alejandro Portaluppi** - [LinkedIn](https://www.linkedin.com/in/alejandro-portaluppi/)
