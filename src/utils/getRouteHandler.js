import DefaultHandler from '../handlers/DefaultHandler.js'
import LoginHandler from '../handlers/LoginHandler.js'
import UsersHandler from '../handlers/UsersHandler.js'
import SetPositionHandler from '../handlers/SetPositionHandler.js'

export default function getRouteHandler(route) {
  const routes = {
    '/login': LoginHandler,
    '/users': UsersHandler,
    '/position': SetPositionHandler,
  }
  return routes[route] || DefaultHandler
}