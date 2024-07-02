// Write your solution in this file!
// Define the initial employee object
const employee = {
  name: "Sam",
};

// Function to update employee with a new key-value pair (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

// Function to update employee destructively (mutates the original employee)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function to delete a key from a clone of employee (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
  const { [key]: deletedProp, ...newEmployee } = employee;
  return newEmployee;
}

// Function to delete a key from the original employee (destructive)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Example usage:
const updatedEmployee = updateEmployeeWithKeyAndValue(
  employee,
  "streetAddress",
  "11 Broadway"
);
console.log(updatedEmployee); // { name: 'Sam', streetAddress: '11 Broadway' }

const updatedEmployeeDestructive = destructivelyUpdateEmployeeWithKeyAndValue(
  employee,
  "streetAddress",
  "12 Broadway"
);
console.log(updatedEmployeeDestructive); // { name: 'Sam', streetAddress: '12 Broadway' }

const newEmployee = deleteFromEmployeeByKey(employee, "name");
console.log(newEmployee); // { streetAddress: '12 Broadway' }

const modifiedEmployee = destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log(modifiedEmployee); // { streetAddress: '12 Broadway' }
