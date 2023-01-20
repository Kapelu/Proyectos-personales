console.clear()
import {createServer} from 'http'  // Importamos una instancia desde http de node_module

// asignamos a una variable la instancia del servidor
const server = createServer((req, res)=>{
    console.log('Server Created')
    res.end('Server Creado')
})
//ejecutamos el servidor
server.listen(3000,'kapelu') // Tenemos que especificar en que puerto y en qué host va a estar escuchando nuestro servidor