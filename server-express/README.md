## primero

```bash
npm init --y
```

Esto nos genera nuestro archivo .json

```json
{
  "name": "server-node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type":"module", // Agregar para poder usar import/export, esto es opcional
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## segundo

* ### Instalamos la libreria de Express

    ```bash
    npm i -E express
    ```
    Agregando -E nos instala la ultima versión de Express, en la documentación podeis encontrar como instalar una version en especifico.
    
    
* ### Instalamos nodemon

    > _*nodemon: Esta dependecia lo que hace es permitir que nuestro servidor se reinicie ante cada modificación.*_

    ```bash
    npm i -E -D nodemon
    ```


a medida que agregamos las dependencias nuestro package.json se va modificando
```json
{
  "name": "server-express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "server": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "2.0.20"
  },
  "dependencies": {
    "express": "4.18.2"
  }
}
```

> VIDEO =>  [🎬](https://www.youtube.com/watch?v=ccsm8vGFMIA&list=PL3aEngjGbYhnrRfZKMxzn79qdgPxL7OWM&index=6)