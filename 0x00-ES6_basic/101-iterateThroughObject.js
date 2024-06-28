#!/usr/bin/node

/**
 * This function takes an object as an argument and returns a string
 * that contains all the properties of the object separated by ' | '.
 * The last occurrence of ' | ' is removed from the result.
 *
 * @param {Object} reportWithIterator - The object to iterate through.
 * @return {string} The string that contains all the properties of the object.
 */
export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty string to store the result
  let result = '';

  // Get the first property of the object
  let iteratorResult = reportWithIterator.next();

  // Loop through all the properties of the object
  while (!iteratorResult.done) {
    // Append the current property to the result string
    result += iteratorResult.value + ' | ';

    // Get the next property of the object
    iteratorResult = reportWithIterator.next();
  }

  // Remove the last occurrence of ' | ' from the result string
  return result.slice(0, -3);
}
