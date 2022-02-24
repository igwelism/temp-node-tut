const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page')
    } else if(req.url === '/about') {
        res.end('Here is our short history')
    } else {
        res.end('Opps an error occured')
    }
})

server.listen(5000)