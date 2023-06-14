
import { htmlEscape } from 'escape-goat'

export const kebabToTitle = (str) => {
  return str
    .split('-')
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ')
}


export const decodeEntity = (htmlStr) => {
  return htmlEscape(htmlStr)
}

export const stringIncludes = (str, strArr) => {
  return strArr
    .map((strArrWord) => strArrWord.toLowerCase())
    .some((strArrWord) => str.toLowerCase().includes(strArrWord))
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