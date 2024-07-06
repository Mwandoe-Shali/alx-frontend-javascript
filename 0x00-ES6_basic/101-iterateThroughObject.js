#!/usr/bin/node

/**
 * This function takes an object as an argument and iterates through it using
 * a for...of loop. It then returns a string containing all the values of the
 * object, separated by the ' | ' character.
 *
 * @param {Object} reportWithIterator - The object to iterate through.
 * @return {string} A string containing all the values of the object, separated
 * by the ' | ' character.
 */
export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty array to store the values of the object
  const returnString = [];

  // Iterate through the object using a for...of loop and push each value to the
  // returnString array
  for (const report of reportWithIterator) {
    returnString.push(report);
  }

  // Join the values of the returnString array into a single string, separated by
  // the ' | ' character and return the result
  return returnString.join(' | ');
}
