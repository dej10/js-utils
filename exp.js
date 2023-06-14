


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

