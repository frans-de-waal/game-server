import http from 'http'
import getRouteHandler from './utils/getRouteHandler.js'
import getRoute from './utils/getRoute.js'

// https://nodejs.org/docs/latest-v16.x/api/http.html#httpcreateserveroptions-requestlistener
const server = http.createServer((
  request, // https://nodejs.org/docs/latest-v16.x/api/http.html#class-httpincomingmessage
  response, // https://nodejs.org/docs/latest-v16.x/api/http.html#class-httpserverresponse
) => {
  const routeHandler = getRouteHandler(getRoute(request))

  routeHandler(request, response)
})

server.listen(8000)

console.log("\nServer listening on port 8000...\n")
