// Append link with https
export const withHttp = (url, {
  https = true
} = {}) => {
  if (typeof url !== 'string') {
    throw new TypeError(
      `Expected \`url\` to be of type \`string\`, got \`${typeof url}\``
    )
  }
  url = url.trim()

  if (url.includes('http://') || url.includes('https://')) {
    return url
  } else if (url.substring(0, 9) === 'localhost') {
    return 'http://' + url
  } else {
    return 'https://' + url
  }
}


// Validate url
export const isValidURL = (url) => {
  let urlInstance
  try {
    urlInstance = new URL(url)
  } catch (_) {
    return false
  }
  return urlInstance.protocol === 'http:' || urlInstance.protocol === 'https:'
}


export const normalizeUrl = (urlString) => {
  const parsedUrl = new URL(urlString)
  if (!parsedUrl.host || !parsedUrl.protocol) {
    return urlString
  } else {
    return (
      parsedUrl.origin +
      parsedUrl.pathname.replace(/\/+/g, '/').replace(/\/$/, '')
    )
  }
}
