var http = require('http');

const payload = [
    {name: 'First Product', 'description': 'This is a description', 'original_price': 399, 'sale_price': 199},
    {name: 'Second Product', 'description': 'This is a description', 'original_price': 499, 'sale_price': 249},
    {name: 'Third Product', 'description': 'This is a description', 'original_price': 599, 'sale_price': 299}
];

http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(payload));
}).listen(process.env.PORT || 3000);
