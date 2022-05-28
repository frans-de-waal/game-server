const http = require('http')

let count = 0

function CountHandler(request, response) {
  count++
  console.log(`count: ${count}`)

  response.statusCode = 200
  response.setHeader('Content-Type', 'application/json')

  const data = {
    count
  }
  response.end(JSON.stringify(data))
}

function DefaultHandler(request, response) {
  response.statusCode = 200
  response.end()
}

const routes = {
  '/count': CountHandler
}

function getRouteHandler(route) {
  return routes[route] || DefaultHandler
}

function getRoute(request) {
  const requestURL = new URL(request.url, `http://${request.headers.host}`)
  const route = requestURL.pathname
  console.log(`\n[ROUTE]: "${route}"`)
  return route
}

// https://nodejs.org/docs/latest-v16.x/api/http.html#httpcreateserveroptions-requestlistener
const server = http.createServer((
  request, // https://nodejs.org/docs/latest-v16.x/api/http.html#class-httpincomingmessage
  response, // https://nodejs.org/docs/latest-v16.x/api/http.html#class-httpserverresponse
) => {
  const routeHandler = getRouteHandler(getRoute(request))

  routeHandler(request, response)
})

server.listen(8000)

console.log("\nServer listening on port 8000...")
