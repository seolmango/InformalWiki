let express = require('express');
let app = express();
let http = require('http').Server(app);
let path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

let port = process.env.PORT || 3000;
http.listen(port, function () {
  console.log("server on!: http://localhost:3000");
});