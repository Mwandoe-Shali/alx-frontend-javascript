#!/usr/bin/node

/**
 * This function takes a report object as an argument and returns an array
 * of all the employees in the report's allEmployees property.
 *
 * @param {Object} report - The report object containing all the employees.
 * @return {Array} An array of all the employees in the report.
 */
export default function createIteratorObject(report) {
  // Initialize an empty array to store the result
  let result = [];

  // Loop through all the values in the allEmployees property of the report
  // object and add them to the result array
  for (const value of Object.values(report.allEmployees)) {
    result = [...result, ...value];
  }

  // Return the result array
  return result;
}
