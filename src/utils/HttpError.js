class HttpError extends Error {
  constructor(code, message) {
    super(message)
    this.httpStatusCode = code
  }
}

export function handler(error, response) {
  const {
    message = 'Unknown error',
    httpStatusCode = 500
  } = error
  console.log(`[ERROR ${httpStatusCode}]: "${message}"`);

  response.statusCode = httpStatusCode
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify({
    error: message
  }))
}

export default HttpError