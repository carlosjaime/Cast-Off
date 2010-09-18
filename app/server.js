var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");
var mime = require("./modules/mime");

var WEBROOT = process.cwd()+"/../public";

http.createServer(function(request, response) {
    var cUrl = url.parse(request.url).pathname;

    switch (cUrl) {
        case '/':
            fs.readFile(WEBROOT+"/index.html", function(e, file) {
                response.writeHead(200, {'Content-Type':'text/html'});
                response.write(file);
                response.end();
            });
            break;
        default:
            // try and match static stuff in /public
            var filename= path.join(WEBROOT, cUrl);
            path.exists(filename, function(exists) {
                if (!exists) {
                    console.log("sending 404 for URL", cUrl);
                    response.writeHead(404, {'Content-Type':'text/html'});
                    response.write("Sorry, that page could not be found");
                    response.end();
                    return;
                }
                fs.readFile(filename, function (e, file) {
                    if (e) {
                        throw e;
                    }
                    response.writeHead(200, {
                        'Content-Length' : file.length,
                        'Content-Type' : mime.getType(filename)
                    });
                    response.write(file);
                    response.end();
                });
            });
            break;
    }
}).listen(8124);

console.log("Server running on port 8124");
