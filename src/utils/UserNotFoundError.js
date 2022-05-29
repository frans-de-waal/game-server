import HttpError from './HttpError.js'
export { handler } from './HttpError.js'

class UserNotFoundError extends HttpError {
  constructor() {
    super(404, 'User not found')
  }
}

export default UserNotFoundError