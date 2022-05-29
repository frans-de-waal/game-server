const users = new Map() // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

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
  return users.get(name)
}