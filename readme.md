# JavaScript Utilities

This repository contains a collection of JavaScript utilities to help with various tasks and improve your development workflow. Each utility is designed to be lightweight, efficient, and easy to use. Below you will find an overview of the available utilities along with instructions on how to use them.

## Table of Contents

- [JavaScript Utilities](#javascript-utilities)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Utilities](#utilities)
    - [Json Parse](#json-parse)
    - [Parse Params](#parse-params)
    - [Get Surrounding Element](#get-surrounding-element)
    - [Copy Text](#copy-text)
    - [Generate FormData from Object](#generate-formdata-from-object)
    - [DeAssociate Object/Array](#deassociate-objectarray)
    - [Remove Empty Keys](#remove-empty-keys)
    - [Interval](#interval)
    - [IsEmpty](#isempty)
    - [Is Not Empty](#is-not-empty)
    - [Is Object](#is-object)
    - [Parse Number](#parse-number)
    - [Rename Obj Key](#rename-obj-key)
    - [Rename Obj Keys](#rename-obj-keys)
    - [Remove Keys](#remove-keys)
    - [Reserve Keys](#reserve-keys)
    - [Querylize](#querylize)
    - [Is Email](#is-email)
    - [Generate Alpha Num](#generate-alpha-num)
    - [Generate Alpha Num](#generate-alpha-num-1)
    - [With HTTP](#with-http)
    - [Null Safe](#null-safe)
    - [is Valid Url](#is-valid-url)
    - [Shuffle Array](#shuffle-array)
    - [Format Error](#format-error)
    - [Get File Size](#get-file-size)
    - [Row Number](#row-number)
    - [String Includes](#string-includes)
    - [Snooze](#snooze)
    - [Null Safe Size](#null-safe-size)
    - [Disable Body Scroll](#disable-body-scroll)
    - [Enable Body Scroll](#enable-body-scroll)
    - [Debounce](#debounce)
    - [Normalize Url](#normalize-url)
    - [Sort Keys By Length](#sort-keys-by-length)
    - [Clean Number](#clean-number)
    - [Decode Entity](#decode-entity)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

To use these utilities, you need to include the JavaScript file in your project. You can either download the file directly from this repository or install it via a package manager.

```bash
npm install @dej10/utils
```

or

```bash
yarn add @dej10/utils
```

Once you have the file in your project, you can import the utility you need using the ES6 import statement.

```javascript
import { utility } from '@dej10/utils'
```

## Utilities

### Json Parse

The JSONParse utility is a function that parses a JSON string into a JavaScript object. It takes two parameters: str, which is the JSON string to parse, and defaultVal (optional), which is the value to return if the parsing fails or the input string is null.

```javascript
import { JSONParse } from '@dej10/utils;

// Example usage
const jsonString = '{"name":"John","age":30,"city":"New York"}';

const parsedObject = JSONParse(jsonString);
```

### Parse Params

The parseParams utility is a function that parses an encoded query string into an object form. It takes a string (str) representing the encoded query string as input and returns an object with the parsed key-value pairs.

```javascript
import { parseParams } from '@dej10/utils;

// Example usage
const queryString = 'name=John&age=30&city=New%20York';

// Parsing the query string
const parsedParams = parseParams(queryString);
```

### Get Surrounding Element

The getSurroundingElement utility is a function that retrieves the surrounding elements of a given element in an array. It takes two parameters: array, which is the array to search within, and element, which is the element for which surrounding elements are sought. The utility returns an object with the previous and next elements, if available.

```javascript
import { getSurroundingElement } from '@dej10/utils;

// Example usage

const array = [1, 2, 3, 4, 5];
const element = 3;

const surroundingElements = getSurroundingElement(array, element);
```

### Copy Text

The copyText utility is a function that copies the provided text to the clipboard. It uses the navigator.clipboard API to perform the copy operation. This utility is typically used in a client-side (browser) environment.

```javascript
import { copyText } from '@dej10/utils;

// Example usage
const textToCopy = "Hello, world!";

copyText(textToCopy);
```

### Generate FormData from Object

The generateFormDataFromObject utility is a function that creates a FormData object from a provided JavaScript object. It iterates over the object's keys and appends each key-value pair to the FormData instance.

```javascript
import { generateFormDataFromObject } from '@dej10/utils;

// Example usage
const dataObject = {
  name: 'John',
  age: 30,
  city: 'New York',
};

const formData = generateFormDataFromObject(dataObject);
```

### DeAssociate Object/Array

The deAssociate utility is a function that de-associates an object by creating a deep copy of the provided object. It uses JSON.parse(JSON.stringify(obj)) to create a new copy of the object without any reference to the original object.

```javascript
import { deAssociate } from '@dej10/utils;

// Example usage
const originalObject = {
  name: 'John',
  age: 30,
  city: 'New York',
};

const deAssociatedObject = deAssociate(originalObject);
```

### Remove Empty Keys

The removeEmptyKeys utility is a function that removes empty keys from an object. It takes an object as input and returns a new object with the empty keys removed.

```javascript
import { removeEmptyKeys } from '@dej10/utils;

// Example usage
const obj = {
  name: 'John',
  age: 30,
  address: '',
  email: null,
};

const result = removeEmptyKeys(obj);
```

### Interval

The removeEmptyKeys utility is a function that removes empty keys from an object. It takes an object as input and returns a new object with the empty keys removed.

```javascript
import { interval } from '@dej10/utils;

// Example usage
const printMessage = () => {
  console.log('Interval function executed!');
};

const intervalId = interval(printMessage, 1000); // Execute the callback every 1 second

// To stop the interval after a certain time
setTimeout(() => {
// Stop the interval after 5 seconds
  clearInterval(intervalId);
}, 5000);
```

### IsEmpty

The isEmpty utility is a function that checks whether an object or an array is empty. It returns true if the provided objOrArr is an empty object or array, or false otherwise

```javascript
import { interval } from '@dej10/utils;

// Example usage
const emptyObject = {};
const nonEmptyObject = { name: 'John' };

console.log(isEmpty(emptyObject));        // true
console.log(isEmpty(nonEmptyObject));     // false

const emptyArray = [];
const nonEmptyArray = [1, 2, 3];

console.log(isEmpty(emptyArray));         // true
console.log(isEmpty(nonEmptyArray));      // false

const notAnObjectOrArray = 'Hello';

console.log(isEmpty(notAnObjectOrArray)); // true
```

### Is Not Empty

The isNotEmpty utility is a function that checks whether an object is not empty. It returns true if the provided obj is not an empty object, or false otherwise. It internally uses the isEmpty utility to determine if the object is empty.

```javascript
import { interval } from '@dej10/utils;


// Example usage
const emptyObject = {};
const nonEmptyObject = { name: 'John' };

console.log(isNotEmpty(emptyObject));        // false
console.log(isNotEmpty(nonEmptyObject));     // true
```

### Is Object

The isObject utility is a function that checks whether a value is an object. It returns true if the provided obj is of type "object" and is not null, or false otherwise.

```javascript
import { isObject } from '@dej10/utils;

// Example usage
console.log(isObject({}));               // true
console.log(isObject([]));               // true
console.log(isObject(null));             // false
console.log(isObject('Hello'));          // false
console.log(isObject(123));              // false
console.log(isObject(new Date()));       // true
```

### Parse Number

The parseNumber utility is a function that converts string values to numbers within an object. It iterates over the keys of the provided obj and checks if the corresponding values are strings that can be converted to numbers. If so, it converts them to numbers using the Number() function.

```javascript
import { parseNumber } from '@dej10/utils;

// Example usage
const inputObject = {
  age: '30',
  height: '175',
  weight: '70',
  name: 'John',
};

const outputObject = parseNumber(inputObject);
```

### Rename Obj Key

The renameKey utility is a function that renames a key in an object. It takes an obj object, the oldKey to be renamed, and the newKey as parameters. If the oldKey exists in the obj, it renames the key to the newKey and deletes the oldKey.

```javascript
import { renameKey } from '@dej10/utils;


// Example usage
const user = {
  name: 'John',
  age: 30,
};

renameKey(user, 'name', 'fullName');
```

### Rename Obj Keys

The renameKeys utility is a function that renames multiple keys in an object. It takes an obj object, an array of oldKeys to be renamed, and an array of corresponding newKeys as parameters. It renames each key from oldKeys to the corresponding key in newKeys using the renameKey utility.

```javascript
import { renameKeys } from '@dej10/utils;

// Example usage
const user = {
  name: 'John',
  age: 30,
  location: 'New York',
};

const oldKeys = ['name', 'location'];
const newKeys = ['fullName', 'city'];

renameKeys(user, oldKeys, newKeys);
```

### Remove Keys

The removeKeys utility is a function that removes multiple keys from an object. It takes an obj object and an array of keys to be removed as parameters. It iterates over the keys array and deletes each key from the obj object using the delete operator.

```javascript
import { removeKeys } from '@dej10/utils;

// Example usage
const user = {
  name: 'John',
  age: 30,
  location: 'New York',
};

const keysToRemove = ['age', 'location'];

const modifiedUser = removeKeys(user, keysToRemove);
```

### Reserve Keys

The reserveKeys utility is a function that creates a new object containing only the specified keys from an existing object. It takes an obj object and an array of keys to be reserved as parameters. It iterates over the keys array, checks if the obj object has each key, and adds the corresponding key-value pair to a new object, \_newObj.

```javascript
import { reserveKeys } from '@dej10/utils;

// Example usage
const user = {
  name: 'John',
  age: 30,
  location: 'New York',
};

const keysToReserve = ['name', 'location'];

const reservedUser = reserveKeys(user, keysToReserve);
```

### Querylize

The querylize utility is a function that converts an object into a query string representation. It takes an obj object as input and iterates over its properties to build the query string.

```javascript
import { querylize } from '@dej10/utils'

// Example usage
const params = {
  name: 'John',
  age: 30,
  location: 'New York',
}

const queryString = querylize(params)
```

### Is Email

The querylize utility is a function that converts an object into a query string representation. It takes an obj object as input and iterates over its properties to build the query string.

```javascript
import { isEmail } from '@dej10/utils'

// Example usage
// Example usage
const email = 'example@example.com'
const isValidEmail = isEmail(email)
console.log(isValidEmail) // true
```

### Generate Alpha Num

The generateAlphaNum utility is a function that generates an alphanumeric string of a specified length. It can be used, for example, to generate payment references or random identifiers.

```javascript
import { generateAlphaNum } from 'js-utils'

// Example usage
const generatedRef = generateAlphaNum(8)
console.log(generatedRef) //2GxR5E9h
```

### Generate Alpha Num

The generateAlphaNum utility is a function that generates an alphanumeric string of a specified length. It can be used, for example, to generate payment references or random identifiers.

```javascript
import { generateAlphaNum } from 'js-utils'

// Example usage
const generatedRef = generateAlphaNum(8)
console.log(generatedRef) //2GxR5E9h
```

### With HTTP

The withHttp utility is a function that appends the http:// or https:// prefix to a given URL if it doesn't already have one. By default, it adds the https:// prefix, but you can override it by passing { https: false } as the second argument.

```javascript
import { withHttp } from 'js-utils'

// Example usage
const url1 = 'example.com'
const url2 = 'http://localhost:3000'
const url3 = 'https://www.google.com'

const result1 = withHttp(url1)
const result2 = withHttp(url2)
const result3 = withHttp(url3, { https: false })

console.log(result1) //https://example.com
console.log(result2) // http://localhost:3000
console.log(result3) // http://www.google.com
```

### Null Safe

The nullSafe utility is a function that safely retrieves the value of a specified key from an object. If the object is null or undefined, it returns an empty string.

```javascript
import { nullSafe } from 'js-utils'

// Example usage
const user = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
}

const name = nullSafe(user, 'name')
const address = nullSafe(user, 'address')

console.log(name) // Output: John
console.log(address) // Output: ''
```

### is Valid Url

The isValidURL utility is a function that validates whether a given URL is valid or not. It checks if the URL can be successfully parsed using the URL constructor, and then verifies if the protocol is either http: or https:.

```javascript
import { isValidURL } from 'js-utils'

// Example usage
const url1 = 'https://www.example.com'
const url2 = 'ftp://www.example.com'

console.log(isValidURL(url1)) // Output: true
console.log(isValidURL(url2)) // Output: false
```

### Shuffle Array

The shuffleArray utility is a function that shuffles the elements of an array in a random order. It uses the Fisher-Yates algorithm to perform the shuffling.

```javascript
import { shuffleArray } from 'js-utils'

// Example usage
const myArray = [1, 2, 3, 4, 5]
const shuffledArray = shuffleArray(myArray)
console.log(shuffledArray) // [4, 2, 1, 5, 3]
```

### Format Error

The formatError utility is a function that handles error responses and formats them into a single error message. It accepts an error object (errObj) and an optional boolean flag (isHtml) to indicate whether the error message should be formatted as HTML or plain text.

```javascript
import { formatError } from 'js-utils'

// Example usage
const errorObj1 = {
  response: {
    data: {
      errors: {
        field1: ['Error 1', 'Error 2'],
        field2: ['Error 3'],
      },
    },
  },
}

const errorObj2 = {
  response: {
    data: {
      message: 'Server error',
    },
  },
}

const errorObj3 = 'Network error'

console.log(formatError(errorObj1)) // Output: "Error 1\nError 2\nError 3"
console.log(formatError(errorObj1, true)) // Output: "Error 1<br>Error 2<br>Error 3"
console.log(formatError(errorObj2)) // Output: "Server error"
console.log(formatError(errorObj3)) // Output: "Network error"
```

### Get File Size

The getFileSize utility is a function that converts a file size in bytes to a human-readable format. It accepts a numeric value (x) representing the file size in bytes and returns the formatted file size as a string.

```javascript
import { getFileSize } from 'js-utils'

// Example usage

console.log(getFileSize(1024)) // Output: "1.0"
console.log(getFileSize(2048)) // Output: "2.0"
console.log(getFileSize(1572864)) // Output: "1.5"
console.log(getFileSize(10485760)) // Output: "10.0"
console.log(getFileSize(268435456)) // Output: "256.0"
```

### Row Number

The rowNumber utility is a function that calculates the row number of an item based on the pagination settings. It takes three parameters: row (the row number within a page), perPage (the number of items per page), and page (the current page number). It returns the overall row number across all pages.

```javascript
import { rowNumber } from 'js-utils'

// Example usage
console.log(rowNumber(1, 10, 2)) // Output: 11
console.log(rowNumber(5, 20, 3)) // Output: 65
console.log(rowNumber(3, 15, 5)) // Output: 63
```

### String Includes

The stringIncludes utility is a function that checks if a string includes any of the words from an array of strings. It takes two parameters: str (the main string to search within) and strArr (an array of strings to search for). It returns a boolean value indicating whether any of the words in the array are found within the main string.

```javascript
import { stringIncludes } from 'js-utils'

// Example usage
console.log(stringIncludes('Hello world', ['hello', 'world'])) // Output: true
console.log(stringIncludes('JavaScript is fun', ['python', 'programming'])) // Output: false
```

### Snooze

The snooze utility is a function that delays the execution of a provided function for a specified timeout period. It takes two parameters: func (the function to be executed) and timeout (the timeout duration in milliseconds, with a default value of 2000). The utility uses setTimeout to schedule the execution of the function after the specified timeout.

```javascript
import { snooze } from 'js-utils'

// Example usage
const greet = () => {
  console.log('Hello, world!')
}

snooze(greet, 3000) // Executes the greet function after a 3000ms (3 seconds) delay
```

### Null Safe Size

The nullSafeSize utility is a function that returns the length of an array or string. It takes a single parameter obj and checks if it is truthy. If obj is truthy, it returns the length of the object. Otherwise, it returns 0.

```javascript
import { nullSafeSize } from 'js-utils'

// Example usage
const array = [1, 2, 3, 4, 5]
const string = 'Hello, world!'
const emptyArray = []
const emptyString = ''

console.log(nullSafeSize(array)) // Output: 5
console.log(nullSafeSize(string)) // Output: 13
console.log(nullSafeSize(emptyArray)) // Output: 0
console.log(nullSafeSize(emptyString)) // Output: 0
```

### Disable Body Scroll

This utility function, disableBodyScroll, disables the vertical scroll of the body element on a web page. It achieves this by setting the overflowY CSS property of the body element to 'hidden' and adjusting the height to '100vh' (100% of the viewport height). This prevents scrolling while maintaining the existing content on the page.

```javascript
import { disableBodyScroll } from 'js-utils'

// Example usage
disableBodyScroll()
```

### Enable Body Scroll

The enableBodyScroll utility function enables the vertical scroll of the body element on a web page. It accomplishes this by setting the overflowY CSS property of the body element to 'visible' and resetting the height to 'auto'. This restores the default scrolling behavior of the page, allowing users to scroll vertically when needed.

When called, this function reverts the changes made by the disableBodyScroll function, restoring the normal scrolling functionality of the web page.

```javascript
import { enableBodyScroll } from 'js-utils'

// Example usage
enableBodyScroll()
```

### Debounce

The debounce utility function is used to debounce the execution of a given function. Debouncing is a technique that limits the rate at which a function is invoked, ensuring it is only called after a certain period of inactivity.

```javascript
import { debounce } from 'js-utils'

// Example usage
function saveData() {
  // Perform some expensive data-saving operation
}

// Debounce saveData function with 500ms wait time
const debouncedSave = debounce(saveData, 500)

// Call debouncedSave function multiple times in quick succession
debouncedSave() // The saveData function will be invoked after 500ms of inactivity
debouncedSave() // The timer is reset, delaying the invocation of saveData again
```

### Normalize Url

The normalizeUrl utility function is a JavaScript function that takes a urlString as input and returns a normalized URL string. It is typically used to ensure that URLs are consistent and in a standardized format.

```javascript
import { normalizeUrl } from 'js-utils'

// Example Usage
const urlString = 'https://example.com//path//to//file///'
const normalizedUrl = normalizeUrl(urlString)
console.log(normalizedUrl)
// Output: 'https://example.com/path/to/file'
```

### Sort Keys By Length

The sortByKeyLength utility function is a JavaScript function that takes an obj (object) as input and sorts its properties based on the length of the keys. It returns a new array of objects containing the key-value pairs, sorted in descending order by key length.

```javascript
import { sortByKeyLength } from 'js-utils'

// Example Usage
const obj = { key1: 'value1', key22: 'value22', key333: 'value333' }
const sortedArray = sortByKeyLength(obj)
console.log(sortedArray)
// Output: [ { key: 'key333', value: 'value333' }, { key: 'key22', value: 'value22' }, { key: 'key1', value: 'value1' } ]
```

### Clean Number

The cleanNumber utility function is a JavaScript function that takes a value and an optional minimum as input and returns a cleaned number

```javascript
import { cleanNumber } from 'js-utils'

// Example Usage
const value = cleanNumber('abc')
console.log(value)
// Output: 0

const valueWithMin = cleanNumber(10, 5)
console.log(valueWithMin)
// Output: 10 (since 10 is greater than the specified minimum of 5)
```

### Decode Entity

The decodeEntity utility function is a JavaScript function that takes an htmlStr (HTML string) as input and returns the decoded version of the HTML entities within the string. It achieves this by calling the htmlEscape function from the escape-goat library.

```javascript
import { decodeEntity } from 'js-utils'

// Example Usage

const htmlString = '&lt;div&gt;Hello, &amp;nbsp;World!&lt;/div&gt;'
const decodedString = decodeEntity(htmlString)
console.log(decodedString)
// Output: '<div>Hello, &nbsp;World!</div>'
```

## Contributing

Contributions to this repository are welcome. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

Please make sure to follow the existing code style and include tests for your changes.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software. Refer to the [LICENSE](LICENSE) file for more details.
