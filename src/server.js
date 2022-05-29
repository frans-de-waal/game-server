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

const port = process.env.PORT || 8000

server.listen(port)

console.log(`\nServer listening on port ${port}...\n`)
