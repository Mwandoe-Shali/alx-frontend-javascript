#!/usr/bin/node

/**
 * This function takes an array and a string as input and
 * returns a new array where each element of the input array
 *      is appended with the input string.
 *
 * @param {Array} array - The array to be modified
 * @param {string} appendString - The string to be appended to each element of input array
 * @return {Array} newArray - The new array where each element of the input array is
 *                               appended with the input string
 */
export default function appendToEachArrayValue(array, appendString) {
  // Initialize an empty array to store the modified elements
  const newArray = [];

  // Iterate over each element of the input array
  for (const value of array) {
    // Append the input string to the current element and push it to the newArray
    newArray.push(appendString + value);
  }

  // Return the new array with the modified elements
  return newArray;
}
