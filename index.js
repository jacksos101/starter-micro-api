var http = require('http');

const payload = [
    {name: 'title'}
];

http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(payload));
}).listen(process.env.PORT || 3000);
