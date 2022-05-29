import { addUser } from '../stores/users.js'
import getPostData from '../utils/getPostData.js'

async function LoginHandler(request, response) {
  const data = await getPostData(request)

  addUser(data.name)

  console.log(`User added: "${data.name}"`);
  response.statusCode = 200
  response.end()
}

export default LoginHandler