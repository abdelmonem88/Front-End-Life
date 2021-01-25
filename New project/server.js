var StaticServer = require("static-server");
var server = new StaticServer({
  rootPath: "./dist", // required, the root of the server file tree
  port: 8000,
});

server.start(function () {
  console.log("Server Started On Port", server.port);
});
