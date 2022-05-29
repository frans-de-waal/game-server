import http from 'http'
import getRouteHandler from './utils/getRouteHandler.js'
import getRoute from './utils/getRoute.js'

// https://nodejs.org/docs/latest-v16.x/api/http.html#httpcreateserveroptions-requestlistener
const server = http.createServer(async (
  request, // https://nodejs.org/docs/latest-v16.x/api/http.html#class-httpincomingmessage
  response, // https://nodejs.org/docs/latest-v16.x/api/http.html#class-httpserverresponse
) => {
  const routeHandler = getRouteHandler(getRoute(request))

  try {
    await routeHandler(request, response)
  } catch(error) {
    response.statusCode = 500
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({
      error: error.message
    }))
  }
})

const port = process.env.PORT || 8000

server.listen(port)

console.log(`\nServer listening on port ${port}...\n`)
