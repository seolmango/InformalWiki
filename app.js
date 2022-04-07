let express = require('express');
let app = express();
let http = require('http').Server(app);
let path = require('path');

app.use(express.static(path.join(__dirname, 'public')));