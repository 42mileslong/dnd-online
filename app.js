const express = require('express');
const app = express();
var port = process.env.PORT || 3000;

app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"));
app.get('/login', (req, res) => res.sendFile(__dirname + "/login.html"));

app.listen(port, () => console.log('Server started'));
