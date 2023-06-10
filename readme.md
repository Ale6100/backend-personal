# Backend personal

Bienvenido! En este nuevo repositorio encontrarás mi propio backend personalizado de acuerdo a mis necesidades, pero configurado de manera que pueda adaptarse fácilmente a otros proyectos.

La idea principal es crear un backend con una única página frontend. Este frontend no contendrá estilos ni lógica avanzada, ya que el objetivo del sitio es centrarse en los endpoints del backend.

Dado que el sitio está destinado _para uso personal_, no proporcionaré la url del mismo, pero si la consigues tampoco podrás utilizarlo ya que se requieren credenciales especiales para su funcionamiento.

## Endpoints 🕵️

Antes de presentar los endpoints disponibles, debes saber que para acceder a ellos se necesita enviar un token de acceso especial en los encabezados utilizando el esquema de autenticación Bearer simple, esto es, enviando Authorization: `Bearer X` en la petición, donde `X` es el valor del token definido en la variable de entorno `TOKEN_GRAL`.

Si no envías el token de acceso, se devuelve una respuesta con el estado 403 y el siguiente cuerpo:

```js
{
    status: "error",
    error: `Forbidden | Token de acceso inválido. Visita https://github.com/Ale6100/backend-personal.git#endpoints-%EF%B8%8F`
}
```

### 1. **Envío de mails** 

En la ruta `/api/mail` con el método `POST`, puedes enviar un correo electrónico. 

#### 1.1. Solicitud
Asegúrese de incluir los siguientes datos en el cuerpo de la solicitud (body):

* `from`: La dirección de correo electrónico desde la cual se enviará el mail, aunque esto es simbólico porque quien lo envía realmente es el colocado en la variable de entorno NODEMAILER_USER. Por esta razón recomiendo colocar el email de envío dentro del propio html o en el subject de la petición

* `to`: La dirección de correo electrónico de destino, a la cual se enviará el correo

* `subject`: Asunto

* `html`: El contenido del correo electrónico en formato HTML

* `attachments` (opcional): Un arreglo que contenga el nombre de los archivos adjuntos junto con sus rutas de origen, por ejemplo `[{filename: "imagen.jpg", path: "https://dummyimage.com/600x400/000/fff"}]`. No envíes ningún archivo pesado, estoy analizando cuál es el límite.

Recuerda convertir a formato JSON al objeto con estos datos, antes de enviarlo por el body.

#### 1.2. Respuesta
Si el correo electrónico se envía correctamente, se devuelve una respuesta con el estado 200 y el siguiente cuerpo:

```js
{
    status: "success",
    message: "Enviado"
}
```

Si faltan valores en la solicitud o alguno de los campos requeridos está vacío, se devuelve una respuesta con el estado 400 y el siguiente cuerpo:

```js
{
  status: "error",
  error: "Valores incompletos"
}

```

Si se produce un error durante el envío del correo electrónico, se devuelve una respuesta con el estado 500 y el siguiente cuerpo:

```js
{
  status: "error",
  error: "X" // El valor X varía según el mensaje de error específico
}
```

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

URL_FRONTEND1 = X
URL_FRONTEND2 = X # URLs de los frontends que desees dar permisos de acceso, sin barra lateral final. Debes dejar como string vacío las variables que no desees usar
URL_FRONTEND3 = X

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
