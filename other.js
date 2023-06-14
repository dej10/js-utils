 export const getFileSize = (x) => {
  let l = 0
  let n = parseInt(x, 10) || 0
  while (n >= 1024 && ++l) {
    n = n / 1024
  }
  return n.toFixed(n < 10 && l > 0 ? 1 : 0)
}

 export const rowNumber = (row, perPage, page) => {
  console.log('lll');
  return (page - 1) * perPage + row
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

 export const scrollToTop = () => window.scrollTo(0, 0)

// 404 error
 export const notFoundError = () => {
  return {
    statusCode: 404,
    message: 'This page could not be found'
  }
}

let timer
 export const snooze = (func, timeout = 2000) => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    func.apply()
  }, timeout)
}

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


// NullSafe while in template
 export const nullSafe = (obj, key) => {
  if (obj) {
    return obj[key]
  } else {
    return ''
  }
}

// ConsoleLog while in template
export  const consoleLog = (key, value = null) => {
  if (process.client) {
    if (value) {
      window.console.log(key, value)
    } else {
      window.console.log(key)
    }
  }
}

// Handle error response
export  const errMessage = (errorObject) => {
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



export const interval = (callback, time) => setInterval(callback, time)




// export {
//   getFileSize
// }