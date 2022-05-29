function DefaultHandler(request, response) {
  console.log('UNKOWN ROUTE');

  response.statusCode = 200
  response.end()
}

export default DefaultHandler