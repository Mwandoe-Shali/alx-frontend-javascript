#!/usr/bin/node

// This function creates an iterator object that can be used to loop over an array of employees.
// It takes in a report object which contains an array of employees grouped by department.
// It returns an object with a 'next' method that returns an object with a 'value' property
// which is the next employee in the array and a 'done' property which is a boolean indicating
// whether or not there are any more employees in the array.
export default function createIteratorObject(report) {
    // Create an empty array to store all employees
    const employees = [];
    
    // Loop through each department in the report object
    for (const department in report.allEmployees) {
        // The spread operator (...) is used to add all employees in a department to the employees array
        employees.push(...report.allEmployees[department]);
    }
    
    // Set the index variable to 0, this will be used to keep track of the current employee
    let index = 0;
    
    // Return an object with a 'next' method that returns an object with a 'value' property
    // and a 'done' property
    return {
        // The 'next' method increments the index variable and returns an object with a 'value' property
        // which is the current employee at the index and a 'done' property which is true if there are
        // no more employees or false otherwise
        next() {
            if (index < employees.length) {
                return { value: employees[index++], done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    };
}
