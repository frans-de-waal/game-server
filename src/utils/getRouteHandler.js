import DefaultHandler from '../handlers/DefaultHandler.js'
import LoginHandler from '../handlers/LoginHandler.js'
import UsersHandler from '../handlers/UsersHandler.js'

const routes = {
  '/login': LoginHandler,
  '/users': UsersHandler,
}

export default function getRouteHandler(route) {
  return routes[route] || DefaultHandler
}