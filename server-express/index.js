console.clear()
const express = require('express')
const PORT = 3000
const server = express()

server.get('/', (req,res)=>{
    res.send('<h1>Mi primer servidor con express</h1>')
})

server.listen(PORT, ()=>{
	console.log('/**********************************/')
	console.log('/                                  / ')
	console.log(`/ Server running on port: [${PORT}]   /`)
	console.log('/                                  / ')
	console.log('/**********************************/')
})