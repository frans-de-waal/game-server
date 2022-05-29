import DefaultHandler from '../handlers/DefaultHandler.js'
import LoginHandler from '../handlers/LoginHandler.js'

const routes = {
  '/login': LoginHandler,
}

export default function getRouteHandler(route) {
  return routes[route] || DefaultHandler
}