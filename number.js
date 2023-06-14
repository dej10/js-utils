// Strips a number number input
export const cleanNumber = (value, min = null) => {
  value = isNaN(value) ? 0 : value
  if (min) {
    value = Math.max(min, value)
  }
  return value
}
