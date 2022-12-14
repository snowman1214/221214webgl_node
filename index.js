const express = require('express');
const app = express();
const http = require('http');
const path = require('path');

// Use the whole root as static files to be able to serve the html file and
// the build folder
app.use(express.static(path.join(__dirname, '/')));

// Send html on '/'path
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, + '/index.html'));	
})

app.listen(4000);
console.log(`server listening on 4000`);
