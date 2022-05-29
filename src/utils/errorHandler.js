import { handler as defaultHandler } from './UserNotFoundError.js'
import UserNotFoundError, { handler as userNotFoundHandler } from './UserNotFoundError.js'

function getErrorHandler(error) {
  if (error instanceof UserNotFoundError) {
    return userNotFoundHandler
  }
  return defaultHandler
}

export default function errorHandler(error, response) {
  const handler = getErrorHandler(error)
  handler(error, response)
}