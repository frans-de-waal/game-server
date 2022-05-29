import { addUser } from '../stores/users.js'

async function LoginHandler(request, response) {
  // https://nodejs.dev/learn/get-http-request-body-data-using-nodejs
  const buffers = []

  for await (const chunk of request) {
    buffers.push(chunk)
  }

  const data = JSON.parse(Buffer.concat(buffers).toString())

  addUser(data.name)

  console.log(`User added: "${data.name}"`);
  response.statusCode = 200
  response.end()
}

export default LoginHandler