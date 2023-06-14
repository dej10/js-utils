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

export const shuffleArray = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const j = i + Math.floor(Math.random() * (arr.length - i))
    const temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
  }

  return arr
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