const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', (error, data) => {
        if(error) {
            res.writeHead(404)
            res.write('Error: ', error)
        } else {
            res.write(data)
        }
        res.end()
    })
    // res.write('Hello World!')
})

server.listen(port, (error) => {
    if(error) {
        console.log('Something went wrong: ', error)
    } else {
        console.log('Server is listening on port: ', port)
        console.log('http://localhost:' + port)
    }
})