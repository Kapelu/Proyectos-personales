#### primero

```bash
npm init --y
```

Esto nos genera un archivo .json

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
#### segundo

Agregar las dependencoas, ya sea de desarrollo o de produccion

> _*nodemon: Esta dependecia lo que hace es permitir que nuestro servidor se reinicie ante cada modificación.*_

```bash
npm i -E -D nodemon
```

a medida que agregamos las dependencias nuestro package.json se va modificando
```json
{
  "name": "server-node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type":"module", // Agregar para poder usar import/export, esto es opcional
  "scripts": {
    "server": "nodemon index.js" // Creamos esta linea para ejecutar nodemon
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {  // Aqui se instalan solo las dependencias solo de desarrollo, no de producción
    "nodemon": "2.0.20"  // nodemon
  }
}
```

> VIDEO =>  [🎬](https://www.youtube.com/watch?v=52XZhmLWJzY&list=PL3aEngjGbYhnrRfZKMxzn79qdgPxL7OWM&index=5)