const http = require('http');

//create a server object:
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(
        '<h1>Hello World!</h1><p>asd</p>');
    res.end();
}).listen(8080);
