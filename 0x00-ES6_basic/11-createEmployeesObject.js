#!/usr/bin/node
export default function createEmployeesObject(departmentName, employees) {
    // Create an object with the departmentName as the key
    // and the employees array as the value.
    return {
        [departmentName]: employees,
    };
}
