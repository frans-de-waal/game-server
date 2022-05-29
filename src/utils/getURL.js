// https://developer.mozilla.org/en-US/docs/Web/API/URL

export default function getURL(request) {
  return new URL(request.url, `http://${request.headers.host}`)
}