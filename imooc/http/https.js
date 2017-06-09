var http = require('http');
var fs = require('fs');

var options = {
	key:fs.readFileSync('ssh_key.pem'),
	cert:fs.readFileSync('ssh_cert.pem')
};

https
.createServer(options,function (req,res) {
	res.writeHead(2000);
	res.end('Hello Imooc');
})
.listen(8090);