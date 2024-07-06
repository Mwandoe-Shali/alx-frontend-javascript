#!/usr/bin/node
export default function createEmployeesObject(departmentName, employees) {
  // Create an object with the departmentName as the key
  // and the employees array as the value.
  const EmployeesObject = { [departmentName]: employees };
  return EmployeesObject;
}
