// https://nodejs.dev/learn/get-http-request-body-data-using-nodejs

export default async function getPostData(request) {
  const buffers = []

  for await (const chunk of request) {
    buffers.push(chunk)
  }

  const data = JSON.parse(Buffer.concat(buffers).toString())
  return data
}