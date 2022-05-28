const http = require('http')

let count = 0

const server = http.createServer((req, res) => {
  res.statusCode = 200 
  res.setHeader('Content-Type', 'application/json')
  count++
  console.log(`Count: ${count}`);
  res.end(`{"data":"OK","count":${count}}`)
})

server.listen(8000)

console.log('Server listening on port 8000...');
