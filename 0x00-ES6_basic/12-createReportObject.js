#!/usr/bin/node
export default function createReportObject(employeesList) {
  const allEmployees = { ...employeesList };

  return {
    allEmployees,
    getNumberOfDepartments: () => Object.keys(employeesList).length,
  };
}
