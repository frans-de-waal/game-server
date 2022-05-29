import getURL from './getURL.js'

export default function getRoute(request) {
  const requestURL = getURL(request)
  const route = requestURL.pathname
  console.log(`\n[ROUTE]: "${route}"`)
  return route
}