// dependencies 
import axios from 'axios';
import { htmlEscape } from 'escape-goat'


// Extended JSON Parse
export const JSONParse = (str, defaultVal = []) => {
  try {
    if (str != null) {
      return JSON.parse(str)
    } else {
      return defaultVal
    }
  } catch (e) {
    return defaultVal
  }
}

// Parse encoded params to object form
export const parseParams = (str) => {
  const pieces = str.split('&')
  const data = {}
  let parts = []
  // process each query pair
  for (let i = 0; i < pieces.length; i++) {
    parts = pieces[i].split('=')
    if (parts.length < 2) {
      parts.push('')
    }
    data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1])
  }

  return data
}

// get surrounding elements of element in an array
export const getSurroundingElement = (array, element) => {
  const minIndex = 0
  const maxIndex = array.length - 1
  const elementIndex = array.indexOf(element)
  let previousElement = null
  let nextElement = null

  if (elementIndex !== -1) {
    if (elementIndex > minIndex) {
      previousElement = elementIndex - 1
    }

    if (elementIndex < maxIndex) {
      nextElement = elementIndex + 1
    }
  }

  return {
    previousElement: array[previousElement],
    nextElement: array[nextElement]
  }
}

// copy text
export const copyText = (text) => {
  if (process.client) {
    const inputField = document.createElement('input')
    document.body.appendChild(inputField)
    inputField.style.visibility = 'hidden'
    inputField.value = text
    // Select the text field
    inputField.select()
    inputField.setSelectionRange(0, 99999) // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(inputField.value)
  }
}

// Create a Formdata from an object
export const generateFormDataFromObject = (obj) => {
  const formData = new FormData()
  const keys = Object.keys(obj)
  if (keys.length) {
    keys.forEach((key) => {
      formData.append(key, obj[key])
    })
  }
  return formData
}

// DeAssociate Object/Array
export const deAssociate = (obj) => {
  return obj ? JSON.parse(JSON.stringify(obj)) : {}
}

export const removeEmptyKeys = (obj) => {
  if (obj) {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v != null && v !== '')
    )
  } else {
    return obj
  }
}

// Intervals
export const interval = (callback, time) => setInterval(callback, time)

/**
 *  Check Empty Object or array
 * @param objectOrArry obj or array
 * @returns boolean
 */
export const isEmpty = (objOrArr) => {
  if (isObject(objOrArr)) {
    return Object.keys(objOrArr).length === 0
  } else if (Array.isArray(objOrArr)) {
    return objOrArr.length === 0
  } else {
    return true
  }
}
// Check isNotEmpty Object
export const isNotEmpty = (obj) => {
  return !isEmpty(obj)
}

// Check if Object
export const isObject = (obj) => {
  return typeof obj === 'object' && obj !== null
}

// Convert String to Number
export const parseNumber = (obj) => {
  const res = {}
  Object.keys(obj).forEach((key) => {
    if (obj[key]) {
      res[key] = !isNaN(obj[key]) ? Number(obj[key]) : obj[key]
    }
  })
  return res
}

// Rename Object Key
export const renameKey = (obj, oldKey, newKey) => {
  if (oldKey !== newKey && Object.hasOwnProperty.call(obj, oldKey)) {
    Object.defineProperty(
      obj,
      newKey,
      Object.getOwnPropertyDescriptor(obj, oldKey)
    )
    delete obj[oldKey]
  }
}

// Rename Object Keys (Array)
export const renameKeys = (obj, oldKeys, newKeys) => {
  if (oldKeys.length === newKeys.length) {
    for (let i = 0; i < oldKeys.length; i++) {
      renameKey(obj, oldKeys[i], newKeys[i])
    }
  }
}

// Remove Object Keys
export const removeKeys = (obj, keys) => {
  if (obj) {
    keys.forEach((key) => {
      if (Object.hasOwnProperty.call(obj, key)) {
        delete obj[key]
      }
    })

    return obj
  }
}

// Reserve Object Keys
export const reserveKeys = (obj, keys) => {
  const _newObj = {}
  keys.forEach((key) => {
    if (Object.hasOwnProperty.call(obj, key)) {
      _newObj[key] = obj[key]
    }
  })
  return _newObj
}

// Querylize
export const querylize = (obj) => {
  const str = []
  for (const prop in obj) {
    if (Object.getOwnPropertyDescriptor(obj, prop)) {
      if (obj[prop]) {
        str.push(encodeURIComponent(prop) + '=' + encodeURIComponent(obj[prop]))
      }
    }
  }
  return '?' + str.join('&')
}

// Handle error response
export const errMessage = (errorObject) => {
  if (process.client) {
    if (errorObject.response) {
      if (errorObject.response.data.errors) {
        return errorObject.response.data.errors.join('\n')
      } else {
        return errorObject.response.data.message
      }
    } else {
      return errorObject
    }
  }
}

// Validate email for edge cases
export const isEmail = (emailStr) => {
  return /\S+@\S+\.\S+/.test(emailStr)
}

// Generate AlphaNum (Payment Refs)
export const generateAlphaNum = (_length) => {
  if (typeof _length === 'string') {
    _length = _length.length;
  }
  const length = _length || 10;
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  const text = Array.from({ length }, () =>
    possible.charAt(Math.floor(Math.random() * possible.length))
  ).join('');

  return text;
};

// SSR LocalStorage
export const ssrLocalStorage = {
  getItem (key) {
    if (process.client) {
      return localStorage.getItem(key)
    }
  },

  setItem (key, value) {
    if (process.client) {
      localStorage.setItem(key, value)
    }
  },

  removeItem (key) {
    if (process.client) {
      localStorage.removeItem(key)
    }
  },

  clear () {
    if (process.client) {
      localStorage.clear()
    }
  }
}

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

// NullSafe while in template
export const nullSafe = (obj, key) => {
  if (obj) {
    return obj[key]
  } else {
    return ''
  }
}

// ConsoleLog while in template
export const consoleLog = (key, value = null) => {
  if (process.client) {
    if (value) {
      window.console.log(key, value)
    } else {
      window.console.log(key)
    }
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

export const shuffleArray = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const j = i + Math.floor(Math.random() * (arr.length - i))
    const temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
  }

  return arr
}

// // Handle error response
// export const formatError = (errObj, isHtml = false) => {
//   const validationErrors = errObj.response ?.data ?.errors // Laravel
//   const compositeErrors = []
//   if (errObj.response) {
//     if (validationErrors) {
//       for (const key in validationErrors) {
//         if (Object.hasOwnProperty.call(validationErrors, key)) {
//           compositeErrors.push(...validationErrors[key])
//         }
//       }
//       return compositeErrors.join(isHtml ? '<br>' : '\n')
//     } else {
//       return errObj.response.data.message
//     }
//   } else {
//     return errObj
//   }
// }


export const getFileSize = (x) => {
  let l = 0
  let n = parseInt(x, 10) || 0
  while (n >= 1024 && ++l) {
    n = n / 1024
  }
  return n.toFixed(n < 10 && l > 0 ? 1 : 0)
}


export const rowNumber = (row, perPage, page) => {
  return (page - 1) * perPage + row
}

export const postAction = ($axios, url, payload) => {
  return axios.post(url, payload, {
    params: payload?.params
  })
}

export const putAction = ($axios, url, payload) => {
  return axios.put(url, payload, {
    params: payload?.params
  })
}

export const getAction = ($axios, url, payload) => {
  return axios.get(url, {
    params: payload
  })
}


export const pushUniqueValue = (array, value, key = null) => {
  const found = array.find((item) => {
    const a = key ? item[key] : item
    const b = key ? value[key] : value

    return a.toLowerCase() === b.toLowerCase()
  })

  if (!found) {
    array.push(value)
  }
}


export const deleteAction = ($axios, url) => {
  return axios.delete(url)
}

export const stringIncludes = (str, strArr) => {
  return strArr
    .map((strArrWord) => strArrWord.toLowerCase())
    .some((strArrWord) => str.toLowerCase().includes(strArrWord))
}

let timer
export const snooze = (func, timeout = 2000) => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    func.apply()
  }, timeout)
}

export const nullSafeSize = (obj) => {
  if (obj) {
    return obj.length
  } else {
    return 0
  }
}

export const disableBodyScroll = () => {
  const body = document.querySelector('body')
  body.style.overflowY = 'hidden'
  body.style.height = '100vh'
}

export const enableBodyScroll = () => {
  const body = document.querySelector('body')
  body.style.overflowY = 'visible'
  body.style.height = 'auto'
}

// debounce
export function debounce(fn, wait) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    const context = this // get the current context
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
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


// 404 error
export const notFoundError = () => {
  return {
    statusCode: 404,
    message: 'This page could not be found'
  }
}

export const sortByKeyLength = (obj) => {
  Object.keys(obj)
    .map(function (k) {
      return { key: k, value: obj[k] }
    })
    .sort(function (a, b) {
      return b.value.length - a.value.length
    })
}

// Strips a number number input
export const cleanNumber = (value, min = null) => {
  value = isNaN(value) ? 0 : value
  if (min) {
    value = Math.max(min, value)
  }
  return value
}


export const scrollToTop = () => window.scrollTo(0, 0)

export const decodeEntity = (htmlStr) => {
  return htmlEscape(htmlStr)
}

export const kebabToTitle = (str) => {
  return str
    .split('-')
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ')
}


generateAlphaNum(10)