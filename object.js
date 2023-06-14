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

export const sortByKeyLength = (obj) => {
  Object.keys(obj)
    .map(function (k) {
      return { key: k, value: obj[k] }
    })
    .sort(function (a, b) {
      return b.value.length - a.value.length
    })
}

export const isEmpty = (objOrArr) => {
  if (isObject(objOrArr)) {
    return Object.keys(objOrArr).length === 0
  } else if (Array.isArray(objOrArr)) {
    return objOrArr.length === 0
  } else {
    return true
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