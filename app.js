let express = require ('express');
let app = express()
const PORT = 3030;
let path = require ('path')

app.use(express.static("public"))//carpeta de donde extraemos todas las imagenes

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "/views/index.html"))
})

app.get('/babbage', function(req, res){
    res.sendFile(path.join(__dirname,"/views/babbage.html"))
})//marco las rutas donde quiero ir
app.get('/berners-lee', function(req, res){
    res.sendFile(path.join(__dirname,"/views/berners-lee.html"))
})
app.get('/clarke', function(req, res){
    res.sendFile(path.join(__dirname,"/views/clarke.html"))
})
app.get('/hamilton', function(req, res){
    res.sendFile(path.join(__dirname,"/views/hamilton.html"))
})
app.get('/hopper', function(req, res){
    res.sendFile(path.join(__dirname,"/views/hopper.html"))
})
app.get('/lovelace', function(req, res){
    res.sendFile(path.join(__dirname,"/views/lovelace.html"))
})
app.get('/turing', function(req, res){
    res.sendFile(path.join(__dirname,"/views/turing.html"))
})


//Server

app.listen(PORT, () => console.log(`Servidor Levantado en el puerto ${PORT}
http://localhost:${PORT}`))//2 parámetros 1 puerto (es el q va a escuchar las solicitudes que hagamos), el segundo parámetro es el request, realizo una arrow function y le paso un console.log con un texto.
