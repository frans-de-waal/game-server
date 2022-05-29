import { getUsers } from "../stores/users.js"

export default function UsersHandler(request, response) {
  const users = getUsers()

  console.log(users);

  response.statusCode = 200
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(users))
}