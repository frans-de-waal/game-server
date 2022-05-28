const http = require('http')

let count = 0

// https://nodejs.org/docs/latest-v16.x/api/http.html#httpcreateserveroptions-requestlistener
const server = http.createServer((
  request, // https://nodejs.org/docs/latest-v16.x/api/http.html#class-httpincomingmessage
  response, // https://nodejs.org/docs/latest-v16.x/api/http.html#class-httpserverresponse
) => {
  const requestURL = new URL(request.url, `http://${request.headers.host}`);

  if (requestURL.pathname === '/count') {
    // console.log('requestURL', requestURL);

    count++
    console.log(`Count: ${count}`);

    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')

    const data = {
      count
    }
    response.end(JSON.stringify(data))
  } else {
    response.statusCode = 200
    response.end()
  }
})

server.listen(8000)

console.log('Server listening on port 8000...');
