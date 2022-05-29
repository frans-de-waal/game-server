import { setUserPosition } from '../stores/users.js'
import getPostData from '../utils/getPostData.js'

export default async function(request, response) {
  const data = await getPostData(request)

  setUserPosition(data.name, data.position)

  console.log(`User position updated: ${JSON.stringify(data)}`);
  response.statusCode = 200
  response.end()
}