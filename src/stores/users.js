const users = new Map() // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
import UserNotFoundError from '../utils/UserNotFoundError.js'

export function addUser(name) {
  users.set(name, { name })
}

export function getUsers() {
  return Array.from(users.values())
}

export function removeUser(name) {
  users.delete(name)
}

export function getUser(name) {
  const user = users.get(name)
  if (!user) {
    throw new UserNotFoundError
  }

  return user
}

export function setUserPosition(name, position) {
  const user = getUser(name)

  user.position = position
  users.set(name, user)
}
