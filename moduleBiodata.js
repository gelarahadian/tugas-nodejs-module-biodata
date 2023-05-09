const http = require('http');

const biodata = require('./modules/biodata.js')

http.createServer(function(req, res){
    res.writeHead(200, {"Content-type": "text/html"});
    res.write('<h1>Nama: ' + biodata.nama() + '</h1><h1>Tempat Lahir : ' + biodata.tempatLahir() + '</h1><h1>Tanggal Lahir: ' + biodata.tanggalLahir() + '</h1><h1>Alamat: ' + biodata.alamat() + '</h1>')
    res.end()
}).listen(3000)

console.log('Nama: ' + biodata.nama())
console.log('Tempat Lahir: ' + biodata.tempatLahir())
console.log('Tanggal Lahir: ' + biodata.tanggalLahir())
console.log('Alamat: ' + biodata.alamat())